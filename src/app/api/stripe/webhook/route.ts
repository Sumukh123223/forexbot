import { NextResponse } from "next/server";
import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { connectDb } from "@/lib/db";
import { Purchase } from "@/models/Purchase";

export async function POST(req: Request) {
  const signature = req.headers.get("stripe-signature");
  if (!signature || !process.env.STRIPE_WEBHOOK_SECRET) return NextResponse.json({ error: "Missing signature" }, { status: 400 });

  const body = await req.text();
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET);
  } catch {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const userId = session.metadata?.userId;
    const botId = session.metadata?.botId;

    if (userId && botId) {
      await connectDb();
      await Purchase.findOneAndUpdate(
        { stripeSessionId: session.id },
        { userId, botId, amount: (session.amount_total || 0) / 100, stripeSessionId: session.id, status: "paid" },
        { upsert: true, new: true }
      );
    }
  }

  return NextResponse.json({ received: true });
}
