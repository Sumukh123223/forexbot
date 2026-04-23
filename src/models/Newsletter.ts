import { Schema, model, models } from "mongoose";

const newsletterSchema = new Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true },
  },
  { timestamps: true }
);

export const Newsletter = models.Newsletter || model("Newsletter", newsletterSchema);
