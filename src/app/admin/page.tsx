import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth-options";
import { connectDb } from "@/lib/db";
import { Bot } from "@/models/Bot";
import { User } from "@/models/User";
import { Purchase } from "@/models/Purchase";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user || session.user.role !== "admin") redirect("/dashboard");

  const db = await connectDb();
  const [bots, users, sales] = db
    ? await Promise.all([
        Bot.find().sort({ createdAt: -1 }).lean(),
        User.find({}, "name email role").sort({ createdAt: -1 }).lean(),
        Purchase.find({ status: "paid" }).sort({ createdAt: -1 }).limit(10).lean(),
      ])
    : [[], [], []];

  const totalSales = sales.reduce((acc, s) => acc + s.amount, 0);

  return (
    <div className="space-y-10">
      <section><h1 className="text-3xl font-bold">Admin Panel</h1><p className="mt-2 text-slate-300">Manage bots, users, and sales operations.</p></section>
      {!db && (
        <p className="rounded-lg border border-amber-500/40 bg-amber-500/10 px-4 py-2 text-sm text-amber-200">
          Running in demo mode (no database connected)
        </p>
      )}
      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4"><p className="text-xs text-slate-400">Bots</p><p className="text-3xl font-bold text-sky-400">{bots.length}</p></div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4"><p className="text-xs text-slate-400">Users</p><p className="text-3xl font-bold text-sky-400">{users.length}</p></div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4"><p className="text-xs text-slate-400">Recent Sales</p><p className="text-3xl font-bold text-emerald-400">${totalSales}</p></div>
      </section>
      <section className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
        <h2 className="mb-3 text-xl font-semibold">Bots</h2><p className="mb-3 text-sm text-slate-300">Use API endpoints to add/edit/delete bots.</p>
        <div className="space-y-2 text-sm text-slate-200">{bots.map((bot) => <p key={bot._id.toString()}>{bot.name} - ${bot.price}</p>)}</div>
      </section>
      <section className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
        <h2 className="mb-3 text-xl font-semibold">Users</h2>
        <div className="space-y-2 text-sm text-slate-200">{users.map((user) => <p key={user._id.toString()}>{user.name} ({user.email}) - {user.role}</p>)}</div>
      </section>
    </div>
  );
}
