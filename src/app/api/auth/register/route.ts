import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDb } from "@/lib/db";
import { User } from "@/models/User";
import { createTempUser, findTempUserByEmail, isTempAuthEnabled } from "@/lib/temp-user-store";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();
    if (!name || !email || !password) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const normalizedEmail = String(email).trim().toLowerCase();
    const hash = await bcrypt.hash(String(password), 10);

    const db = await connectDb();
    if (db) {
      const existing = await User.findOne({ email: normalizedEmail });
      if (existing) {
        return NextResponse.json({ error: "Email already in use" }, { status: 409 });
      }

      await User.create({
        name: String(name).trim(),
        email: normalizedEmail,
        password: hash,
        role: "user",
        purchases: [],
      });
      return NextResponse.json({ message: "Account created" }, { status: 201 });
    }

    if (!isTempAuthEnabled()) {
      return NextResponse.json({ error: "Database is offline" }, { status: 503 });
    }

    const existingTemp = await findTempUserByEmail(normalizedEmail);
    if (existingTemp) {
      return NextResponse.json({ error: "Email already in use" }, { status: 409 });
    }
    await createTempUser({
      name: String(name).trim(),
      email: normalizedEmail,
      password: hash,
      role: "user",
      purchases: [],
    });

    return NextResponse.json({ message: "Account created (temporary mode)" }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
