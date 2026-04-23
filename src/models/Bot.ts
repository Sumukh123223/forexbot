import { Schema, model, models } from "mongoose";

export interface IBot {
  name: string;
  slug: string;
  tier: "Basic" | "Pro" | "Premium";
  price: number;
  description: string;
  features: string[];
  downloadUrl: string;
  roi: number;
  winRate: number;
  drawdown: number;
  active: boolean;
}

const botSchema = new Schema<IBot>(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    tier: { type: String, enum: ["Basic", "Pro", "Premium"], required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    features: [{ type: String, required: true }],
    downloadUrl: { type: String, required: true },
    roi: { type: Number, required: true },
    winRate: { type: Number, required: true },
    drawdown: { type: Number, required: true },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const Bot = models.Bot || model<IBot>("Bot", botSchema);
