const brokers = [
  ["MT5 Regulated Brokers", "Supported"],
  ["MT4 Legacy Environments", "Supported with setup checks"],
  ["Exchange API Connectors", "Available by connector profile"],
  ["Prop Firm Rule Profiles", "Supported with custom risk templates"],
];

export default function BrokerCompatibilityPage() {
  return (
    <div className="ui-page space-y-6">
      <section className="ui-section">
        <h1 className="ui-title">Broker Compatibility</h1>
        <p className="ui-subtitle">Connection, symbol mapping, and execution prerequisites by environment type.</p>
      </section>

      <section className="ui-section">
        <div className="ui-table-wrap">
          <table className="ui-table">
            <thead>
              <tr>
                <th>Environment</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {brokers.map(([name, status]) => (
                <tr key={name}>
                  <td>{name}</td>
                  <td className="text-[color:var(--terminal-muted)]">{status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-[color:var(--terminal-muted)]">
          Always verify leverage limits, symbol suffixes, order type availability, and spread behavior before enabling full automation.
        </p>
      </section>
    </div>
  );
}
