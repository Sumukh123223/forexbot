import { promises as fs } from "fs";
import path from "path";

export type TempUserRecord = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: "user" | "admin";
  purchases: string[];
};

type TempStoreShape = {
  users: TempUserRecord[];
};

const storeDir = path.join(process.cwd(), ".tmp");
const storeFile = path.join(storeDir, "temp-users.json");

export function isTempAuthEnabled() {
  // Always allow temp auth in development for local testing.
  // In production, require explicit TEMP_AUTH=1 to enable fallback.
  if (process.env.NODE_ENV !== "production") return true;
  return process.env.TEMP_AUTH === "1";
}

async function ensureStore() {
  await fs.mkdir(storeDir, { recursive: true });
  try {
    await fs.access(storeFile);
  } catch {
    const initial: TempStoreShape = { users: [] };
    await fs.writeFile(storeFile, JSON.stringify(initial, null, 2), "utf8");
  }
}

async function readStore(): Promise<TempStoreShape> {
  await ensureStore();
  const raw = await fs.readFile(storeFile, "utf8");
  return (JSON.parse(raw) as TempStoreShape) || { users: [] };
}

async function writeStore(data: TempStoreShape) {
  await ensureStore();
  await fs.writeFile(storeFile, JSON.stringify(data, null, 2), "utf8");
}

export async function findTempUserByEmail(email: string) {
  const store = await readStore();
  const normalized = email.trim().toLowerCase();
  return store.users.find((u) => u.email === normalized) || null;
}

export async function findTempUserById(id: string) {
  const store = await readStore();
  return store.users.find((u) => u.id === id) || null;
}

export async function createTempUser(input: Omit<TempUserRecord, "id">) {
  const store = await readStore();
  const user: TempUserRecord = {
    ...input,
    id: `temp_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    email: input.email.trim().toLowerCase(),
  };
  store.users.push(user);
  await writeStore(store);
  return user;
}
