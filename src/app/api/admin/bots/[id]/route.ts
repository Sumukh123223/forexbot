import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";
import { connectDb } from "@/lib/db";
import { Bot } from "@/models/Bot";

async function verifyAdmin() {
  const session = await getServerSession(authOptions);
  return session?.user?.role === "admin";
}

export async function PATCH(req: Request, context: { params: Promise<{ id: string }> }) {
  if (!(await verifyAdmin())) return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  const payload = await req.json();
  const { id } = await context.params;
  await connectDb();
  const updated = await Bot.findByIdAndUpdate(id, payload, { new: true });
  return NextResponse.json(updated);
}

export async function DELETE(_req: Request, context: { params: Promise<{ id: string }> }) {
  if (!(await verifyAdmin())) return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  const { id } = await context.params;
  await connectDb();
  await Bot.findByIdAndDelete(id);
  return NextResponse.json({ success: true });
}
