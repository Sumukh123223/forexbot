export default function InstallationPage() {
  return (
    <div className="ui-page space-y-6">
      <section className="ui-section">
        <h1 className="ui-title">How Installation Works</h1>
        <p className="ui-subtitle">Simple guided process from plan purchase to first live bot run.</p>
      </section>

      <section className="ui-section">
        <ol className="space-y-3 text-sm text-[color:var(--terminal-muted)]">
          <li><span className="font-medium text-[color:var(--terminal-text)]">1. Purchase Plan:</span> Select Bronze, Silver, Gold, or Platinum from pricing.</li>
          <li><span className="font-medium text-[color:var(--terminal-text)]">2. Book Installation Slot:</span> Choose an onboarding time after checkout confirmation.</li>
          <li><span className="font-medium text-[color:var(--terminal-text)]">3. Account Setup:</span> Connect MT5/broker details and validate symbol settings.</li>
          <li><span className="font-medium text-[color:var(--terminal-text)]">4. Risk Configuration:</span> Apply drawdown cap, daily loss limit, and exposure rules.</li>
          <li><span className="font-medium text-[color:var(--terminal-text)]">5. Live Validation:</span> Team verifies first execution cycle via email or live session.</li>
        </ol>
      </section>
    </div>
  );
}
