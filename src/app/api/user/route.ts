import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";
import { connectDb } from "@/lib/db";
import { User } from "@/models/User";
import { findTempUserByEmail, findTempUserById, isTempAuthEnabled } from "@/lib/temp-user-store";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const db = await connectDb();
  if (db) {
    const user = await User.findById(session.user.id, "name email role purchases").lean();
    return NextResponse.json(user || null);
  }

  if (!isTempAuthEnabled()) {
    return NextResponse.json({ error: "Database is offline" }, { status: 503 });
  }

  const tempUser =
    (session.user.id ? await findTempUserById(session.user.id) : null) ||
    (session.user.email ? await findTempUserByEmail(session.user.email) : null);

  if (!tempUser) return NextResponse.json(null);
  return NextResponse.json({
    id: tempUser.id,
    name: tempUser.name,
    email: tempUser.email,
    role: tempUser.role,
    purchases: tempUser.purchases,
  });
}
