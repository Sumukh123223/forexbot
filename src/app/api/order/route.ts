import { NextResponse } from "next/server";
import { connectDb } from "@/lib/db";
import { Order } from "@/models/Order";

export async function POST(req: Request) {
  try {
    const { plan, price, customerName, customerEmail, customerContact } = await req.json();
    if (!plan || !price || !customerName || !customerEmail || !customerContact) {
      return NextResponse.json({ error: "Missing order details" }, { status: 400 });
    }

    const db = await connectDb();
    const normalizedEmail = String(customerEmail).trim().toLowerCase();
    const orderPayload = {
      plan: String(plan),
      price: Number(price),
      customerName: String(customerName).trim(),
      customerEmail: normalizedEmail,
      customerContact: String(customerContact).trim(),
      status: "pending" as const,
    };

    let orderId = `tmp_${Date.now()}`;
    if (db) {
      const order = await Order.create(orderPayload);
      orderId = order._id.toString();
    }

    const merchantApiKey = process.env.OXAPAY_MERCHANT_API_KEY;
    if (!merchantApiKey) {
      return NextResponse.json({ error: "OxaPay is not configured. Missing OXAPAY_MERCHANT_API_KEY." }, { status: 500 });
    }

    const requestUrl = new URL(req.url);
    const appBaseUrl = process.env.NEXTAUTH_URL || requestUrl.origin;
    const callbackUrl = `${appBaseUrl}/api/order/oxapay-callback`;
    const returnUrl = `${appBaseUrl}/payment/success?orderId=${encodeURIComponent(orderId)}`;

    const oxapayPayload = {
      amount: Number(price),
      currency: process.env.OXAPAY_CURRENCY || "USD",
      lifetime: Number(process.env.OXAPAY_INVOICE_LIFETIME_MINUTES || 60),
      callback_url: callbackUrl,
      return_url: returnUrl,
      email: normalizedEmail,
      order_id: orderId,
      description: `Candle Follow EA - ${String(plan)}`,
      sandbox: process.env.OXAPAY_SANDBOX === "true",
    };

    const oxapayRes = await fetch("https://api.oxapay.com/v1/payment/invoice", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        merchant_api_key: merchantApiKey,
      },
      body: JSON.stringify(oxapayPayload),
    });

    const oxapayData = (await oxapayRes.json().catch(() => null)) as
      | { data?: { payment_url?: string }; message?: string; error?: { message?: string } }
      | null;

    const checkoutUrl = oxapayData?.data?.payment_url;
    if (!oxapayRes.ok || !checkoutUrl) {
      const message = oxapayData?.error?.message || oxapayData?.message || "Failed to create OxaPay invoice";
      return NextResponse.json({ error: message }, { status: 502 });
    }

    return NextResponse.json({ orderId, checkoutUrl }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
