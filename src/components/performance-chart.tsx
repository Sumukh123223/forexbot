"use client";

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

type ChartPoint = { month: string; balance: number };

export function PerformanceChart({ data }: { data: ChartPoint[] }) {
  return (
    <div className="h-72 w-full rounded-xl border border-cyan-900/60 bg-slate-900/50 p-3">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="month" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip />
          <Line type="monotone" dataKey="balance" stroke="#22d3ee" strokeWidth={3} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
