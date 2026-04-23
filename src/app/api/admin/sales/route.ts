import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";
import { connectDb } from "@/lib/db";
import { Purchase } from "@/models/Purchase";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (session?.user?.role !== "admin") return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  await connectDb();
  const sales = await Purchase.find({ status: "paid" }).populate("userId", "email").populate("botId", "name").sort({ createdAt: -1 }).lean();
  return NextResponse.json(sales);
}
