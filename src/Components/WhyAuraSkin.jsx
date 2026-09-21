// ============================================================
// WhyAuraSkin.jsx — GOLD STATS BAND ("WHY AURASKIN STORE?")
// ============================================================
// WHAT YOU SEE:
//   A black-and-sandal section with a trust paragraph on top
//   and 4 numbers below: 100% / 20+ / 5000+ / 30+
// PLACEMENT: after the last product row, before Footer.
//
// HOW TO CHANGE: edit the stats array below
// (value = big number, label = small text under it).
// No props needed.
// ============================================================

const stats = [
  { value: "100%", label: "CLINICALLY PROVEN RESULTS" },
  { value: "20+", label: "YEARS OF EXPERTISE" },
  { value: "5000+", label: "HAPPY CLIENTS WORLDWIDE" },
  { value: "30+", label: "TRAINED PRACTITIONERS" },
];

export default function WhyAuraSkin() {
  return (
    <section className="why-section">
      <div className="why-inner">
        <p className="why-eyebrow">WHY AURASKIN STORE?</p>
        <p className="why-text">
          WITH YEARS OF EXPERTISE IN PREMIUM SKINCARE, OUR DEDICATED TEAM BRINGS MORE THAN JUST PASSION WE DELIVER
          TRUST, PROVEN RESULTS, AND A COMMITMENT TO ENHANCING YOUR NATURAL GLOW.
        </p>

        {/* One box per object in stats above */}
        <div className="why-stats">
          {stats.map((s) => (
            <div key={s.label} className="why-stat">
              <span className="why-value">{s.value}</span>
              <span className="why-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}