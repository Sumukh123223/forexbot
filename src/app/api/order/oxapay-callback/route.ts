import { createHmac, timingSafeEqual } from "crypto";
import { NextResponse } from "next/server";
import { connectDb } from "@/lib/db";
import { Order } from "@/models/Order";

function isValidHmac(rawBody: string, receivedHmac: string, secret: string) {
  const expected = createHmac("sha512", secret).update(rawBody).digest("hex");
  const received = receivedHmac.trim().toLowerCase();
  if (expected.length !== received.length) return false;
  return timingSafeEqual(Buffer.from(expected), Buffer.from(received));
}

export async function POST(req: Request) {
  const merchantApiKey = process.env.OXAPAY_MERCHANT_API_KEY;
  if (!merchantApiKey) {
    return new NextResponse("ok", { status: 200 });
  }

  const receivedHmac = req.headers.get("hmac");
  if (!receivedHmac) {
    return new NextResponse("Invalid HMAC", { status: 400 });
  }

  const rawBody = await req.text();
  if (!isValidHmac(rawBody, receivedHmac, merchantApiKey)) {
    return new NextResponse("Invalid HMAC", { status: 400 });
  }

  let payload: { order_id?: string; status?: string; type?: string };
  try {
    payload = JSON.parse(rawBody) as { order_id?: string; status?: string; type?: string };
  } catch {
    return new NextResponse("Invalid JSON", { status: 400 });
  }
  const orderId = payload.order_id;
  const status = String(payload.status || "").toLowerCase();

  if (!orderId || payload.type !== "invoice") {
    return new NextResponse("ok", { status: 200 });
  }

  const db = await connectDb();
  if (!db) {
    return new NextResponse("ok", { status: 200 });
  }

  if (status === "paid") {
    await Order.findByIdAndUpdate(orderId, { status: "paid" }).exec();
  } else if (status === "failed") {
    await Order.findByIdAndUpdate(orderId, { status: "failed" }).exec();
  } else {
    await Order.findByIdAndUpdate(orderId, { status: "pending" }).exec();
  }

  // OxaPay expects HTTP 200 with "ok" to stop retries.
  return new NextResponse("ok", { status: 200 });
}
