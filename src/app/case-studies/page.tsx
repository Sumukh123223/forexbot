const studies = [
  {
    name: "Kanu Bhai Patel",
    account: "$20,000",
    duration: "45 days",
    result: "+28.4%",
    summary: "Focused on conservative risk profile and trend confirmation only.",
  },
  {
    name: "Dr. Mithilesh Pandya",
    account: "$10,000",
    duration: "30 days",
    result: "+17.2%",
    summary: "Used fixed exposure cap with strict daily risk limits.",
  },
  {
    name: "Rajan Patel",
    account: "$5,000",
    duration: "30 days",
    result: "+13.1%",
    summary: "Balanced profile with reduced entries during high-spread windows.",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="ui-page space-y-6">
      <section className="ui-section">
        <h1 className="ui-title">Case Studies</h1>
        <p className="ui-subtitle">Real-style operating examples showing risk discipline, setup choices, and tracked outcomes.</p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {studies.map((study) => (
          <article key={study.name} className="ui-section">
            <p className="text-sm text-[color:var(--terminal-muted)]">{study.name}</p>
            <p className="mt-2 text-xl font-semibold text-[color:var(--terminal-text)]">{study.result}</p>
            <p className="mt-2 text-sm text-[color:var(--terminal-muted)]">Account: {study.account}</p>
            <p className="text-sm text-[color:var(--terminal-muted)]">Duration: {study.duration}</p>
            <p className="mt-3 text-sm text-[color:var(--terminal-muted)]">{study.summary}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
