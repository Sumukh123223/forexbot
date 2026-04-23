import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";
import { connectDb } from "@/lib/db";
import { Bot } from "@/models/Bot";
import { getStripe } from "@/lib/stripe";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id || !session.user.email) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { botId } = await req.json();
  await connectDb();
  const bot = await Bot.findById(botId).lean();
  if (!bot) return NextResponse.json({ error: "Bot not found" }, { status: 404 });

  const stripe = getStripe();
  const checkout = await stripe.checkout.sessions.create({
    mode: "payment",
    success_url: `${process.env.NEXTAUTH_URL}/payment/success`,
    cancel_url: `${process.env.NEXTAUTH_URL}/payment/cancel`,
    customer_email: session.user.email,
    metadata: { userId: session.user.id, botId: bot._id.toString(), botName: bot.name },
    line_items: [{
      quantity: 1,
      price_data: {
        currency: "usd",
        unit_amount: Math.round(bot.price * 100),
        product_data: { name: bot.name, description: bot.description },
      },
    }],
  });

  return NextResponse.json({ url: checkout.url });
}
