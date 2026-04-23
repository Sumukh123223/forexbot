import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";
import { connectDb } from "@/lib/db";
import { Order } from "@/models/Order";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const db = await connectDb();
  if (!db) {
    return NextResponse.json({ error: "Database is offline" }, { status: 503 });
  }

  const orders = await Order.find({ userId: session.user.id }).sort({ createdAt: -1 }).lean();
  return NextResponse.json(orders);
}
