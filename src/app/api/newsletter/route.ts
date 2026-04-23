import { NextResponse } from "next/server";
import { connectDb } from "@/lib/db";
import { Newsletter } from "@/models/Newsletter";

export async function POST(req: Request) {
  const { email } = await req.json();
  if (!email) return NextResponse.json({ error: "Email is required" }, { status: 400 });

  await connectDb();
  await Newsletter.findOneAndUpdate({ email }, { email }, { upsert: true, new: true });
  return NextResponse.json({ success: true });
}
