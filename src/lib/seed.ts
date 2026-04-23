import { Bot } from "@/models/Bot";
import { defaultBots } from "@/lib/static-data";

export async function ensureBotSeed() {
  if (Bot.db.readyState !== 1) {
    return;
  }

  const count = await Bot.countDocuments();
  if (count > 0) return;
  await Bot.insertMany(defaultBots.map((bot) => ({ ...bot, active: true })));
}
