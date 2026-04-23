import { CheckoutButton } from "@/components/checkout-button";
import { connectDb } from "@/lib/db";
import { ensureBotSeed } from "@/lib/seed";
import { defaultBots } from "@/lib/static-data";
import { Bot } from "@/models/Bot";

export const metadata = { title: "Forex Bots Pricing | ForexAI Bots" };
export const dynamic = "force-dynamic";

export default async function ProductsPage() {
  const db = await connectDb();
  let bots = defaultBots.map((bot) => ({ ...bot, id: bot.slug }));

  if (db) {
    await ensureBotSeed();
    const dbBots = await Bot.find({ active: true }).sort({ price: 1 }).lean();
    if (dbBots.length > 0) {
      bots = dbBots.map((bot) => ({
        id: bot._id.toString(),
        name: bot.name,
        slug: bot.slug,
        tier: bot.tier,
        price: bot.price,
        description: bot.description,
        features: bot.features,
        downloadUrl: bot.downloadUrl,
        roi: bot.roi,
        winRate: bot.winRate,
        drawdown: bot.drawdown,
      }));
    }
  }

  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-3xl font-bold">Choose Your Trading Bot</h1>
        <p className="mt-2 text-slate-300">Select a tier that matches your trading profile and risk appetite.</p>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        {bots.map((bot) => (
          <article key={bot.id} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <p className="text-sm text-sky-400">{bot.tier}</p>
            <h2 className="mt-1 text-2xl font-semibold">{bot.name}</h2>
            <p className="mt-1 text-3xl font-bold text-emerald-400">${bot.price}</p>
            <p className="mt-3 text-sm text-slate-300">{bot.description}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              {bot.features.map((f: string) => <li key={f}>• {f}</li>)}
            </ul>
            <div className="mt-5">
              {db ? (
                <CheckoutButton botId={bot.id} />
              ) : (
                <button
                  disabled
                  className="rounded-lg bg-slate-700 px-4 py-2 font-semibold text-slate-300 opacity-70"
                >
                  Buy Now (Demo Mode)
                </button>
              )}
            </div>
          </article>
        ))}
      </section>

      <section className="overflow-x-auto rounded-xl border border-slate-800">
        <table className="w-full text-sm">
          <thead className="bg-slate-900 text-left text-sky-400">
            <tr><th className="p-3">Tier</th><th className="p-3">ROI</th><th className="p-3">Win Rate</th><th className="p-3">Drawdown</th><th className="p-3">Support</th></tr>
          </thead>
          <tbody>
            {bots.map((bot) => (
              <tr key={bot.slug} className="border-t border-slate-800">
                <td className="p-3">{bot.tier}</td><td className="p-3 text-emerald-400">{bot.roi}%</td><td className="p-3">{bot.winRate}%</td><td className="p-3">{bot.drawdown}%</td><td className="p-3">{bot.tier === "Premium" ? "Priority" : "Standard"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
