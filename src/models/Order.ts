import { Schema, model, models, Types } from "mongoose";

export interface IOrder {
  userId?: Types.ObjectId;
  plan: string;
  price: number;
  customerName: string;
  customerEmail: string;
  customerContact: string;
  status: "pending" | "paid" | "failed";
}

const orderSchema = new Schema<IOrder>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: false },
    plan: { type: String, required: true },
    price: { type: Number, required: true },
    customerName: { type: String, required: true },
    customerEmail: { type: String, required: true, lowercase: true },
    customerContact: { type: String, required: true },
    status: { type: String, enum: ["pending", "paid", "failed"], default: "pending" },
  },
  { timestamps: true }
);

export const Order = models.Order || model<IOrder>("Order", orderSchema);
