import { Schema, model, models, Types } from "mongoose";

export interface IPurchase {
  userId: Types.ObjectId;
  botId: Types.ObjectId;
  amount: number;
  stripeSessionId: string;
  status: "paid" | "failed";
}

const purchaseSchema = new Schema<IPurchase>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    botId: { type: Schema.Types.ObjectId, ref: "Bot", required: true },
    amount: { type: Number, required: true },
    stripeSessionId: { type: String, required: true, unique: true },
    status: { type: String, enum: ["paid", "failed"], default: "paid" },
  },
  { timestamps: true }
);

export const Purchase = models.Purchase || model<IPurchase>("Purchase", purchaseSchema);
