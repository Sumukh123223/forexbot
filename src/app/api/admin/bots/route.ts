import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";
import { connectDb } from "@/lib/db";
import { Bot } from "@/models/Bot";

async function verifyAdmin() {
  const session = await getServerSession(authOptions);
  return session?.user?.role === "admin";
}

export async function GET() {
  if (!(await verifyAdmin())) return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  await connectDb();
  const bots = await Bot.find().sort({ createdAt: -1 }).lean();
  return NextResponse.json(bots);
}

export async function POST(req: Request) {
  if (!(await verifyAdmin())) return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  const payload = await req.json();
  await connectDb();
  const bot = await Bot.create(payload);
  return NextResponse.json(bot, { status: 201 });
}
