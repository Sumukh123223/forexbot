import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDb } from "@/lib/db";
import { User } from "@/models/User";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json({ error: "Missing credentials" }, { status: 400 });
    }

    const db = await connectDb();
    if (!db) {
      return NextResponse.json({ error: "Database is offline" }, { status: 503 });
    }

    const user = await User.findOne({ email: String(email).trim().toLowerCase() }).lean();
    if (!user) return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });

    const valid = await bcrypt.compare(String(password), user.password);
    if (!valid) return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });

    return NextResponse.json({ message: "Credentials verified" });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
