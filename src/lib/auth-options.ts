import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { connectDb } from "@/lib/db";
import { User } from "@/models/User";
import { findTempUserByEmail, isTempAuthEnabled } from "@/lib/temp-user-store";

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  pages: { signIn: "/login" },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;
        const db = await connectDb();

        if (db) {
          const user = await User.findOne({ email: credentials.email }).lean();
          if (!user) return null;
          const isValid = await bcrypt.compare(credentials.password, user.password);
          if (!isValid) return null;
          return { id: user._id.toString(), email: user.email, name: user.name, role: user.role };
        }

        if (!isTempAuthEnabled()) return null;
        const tempUser = await findTempUserByEmail(credentials.email);
        if (!tempUser) return null;
        const isValid = await bcrypt.compare(credentials.password, tempUser.password);
        if (!isValid) return null;
        return { id: tempUser.id, email: tempUser.email, name: tempUser.name, role: tempUser.role };
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) token.role = (user as { role?: string }).role || "user";
      return token;
    },
    session: async ({ session, token }) => {
      if (session.user) {
        session.user.id = token.sub || "";
        session.user.role = (token.role as "user" | "admin") || "user";
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
