import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDb } from "@/lib/db";
import { User } from "@/models/User";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();
    if (!name || !email || !password) return NextResponse.json({ error: "Missing required fields" }, { status: 400 });

    const db = await connectDb();
    if (!db) {
      return NextResponse.json(
        { error: "Database is offline. Start MongoDB and try again." },
        { status: 503 }
      );
    }

    const normalizedEmail = String(email).trim().toLowerCase();
    const existing = await User.findOne({ email: normalizedEmail });
    if (existing) return NextResponse.json({ error: "Email already in use" }, { status: 409 });

    const hash = await bcrypt.hash(password, 10);
    await User.create({ name: String(name).trim(), email: normalizedEmail, password: hash, role: "user" });
    return NextResponse.json({ message: "Account created" }, { status: 201 });
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
