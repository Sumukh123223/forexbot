import mongoose from "mongoose";

type MongooseCache = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
  warningShown?: boolean;
};

declare global {
  var mongooseCache: MongooseCache | undefined;
}

const cached: MongooseCache = global.mongooseCache || {
  conn: null,
  promise: null,
  warningShown: false,
};

if (!global.mongooseCache) {
  global.mongooseCache = cached;
}

export async function connectDB() {
  const mongoUri = process.env.MONGODB_URI;

  if (!mongoUri) {
    if (process.env.NODE_ENV === "production") {
      throw new Error("MONGODB_URI is required in production.");
    }

    if (!cached.warningShown) {
      console.warn("Running in demo mode (no database connected)");
      cached.warningShown = true;
    }
    return null;
  }

  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(mongoUri, {
      dbName: process.env.MONGODB_DB_NAME || "forex_ai_bots",
      bufferCommands: false,
      serverSelectionTimeoutMS: 5000,
      connectTimeoutMS: 5000,
    });
  }

  cached.conn = await cached.promise.catch((error) => {
    cached.promise = null;
    if (process.env.NODE_ENV === "production") {
      throw error;
    }
    if (!cached.warningShown) {
      console.warn("Running in demo mode (no database connected)");
      cached.warningShown = true;
    }
    return null;
  });

  return cached.conn;
}

export const connectDb = connectDB;
