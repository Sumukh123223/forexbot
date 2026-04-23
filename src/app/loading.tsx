export default function RootLoading() {
  return (
    <div className="space-y-4 animate-pulse">
      <div className="h-12 w-2/3 rounded-lg bg-slate-800" />
      <div className="h-32 rounded-lg bg-slate-800" />
      <div className="grid gap-3 md:grid-cols-3">
        <div className="h-24 rounded-lg bg-slate-800" />
        <div className="h-24 rounded-lg bg-slate-800" />
        <div className="h-24 rounded-lg bg-slate-800" />
      </div>
    </div>
  );
}
