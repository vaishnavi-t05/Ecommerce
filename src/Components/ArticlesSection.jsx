// ============================================================
// ArticlesSection.jsx — "LATEST ARTICLES" (2 article cards)
// ============================================================
// WHAT YOU SEE:
//   Header: "LATEST ARTICLES" + "2 MAKEUP HACKS EVERY WOMAN..." 
//   Two white cards, each with: tag / date, title, photo.
// PLACEMENT: sits after the FIRST row of products (see App.jsx).
//
// HOW TO CHANGE: edit the articles array below
// (tag, date, title, img, alt). Add a third object for 3 cards.
// No props needed.
// ============================================================

const articles = [
  {
    id: 1,
    tag: "Green Choices Matter",
    date: "Jan 06, 2026",
    title: "ESSENTIAL DAILY SKINCARE RITUALS FOR LONG-LASTING RADIANCE",
    img: "https://images.pexels.com/photos/6690236/pexels-photo-6690236.jpeg?auto=compress&cs=tinysrgb&w=700",
    alt: "Flat lay of cream jar and spray bottles on beige with eucalyptus",
  },
  {
    id: 2,
    tag: "Green Choices Matter",
    date: "Dec 31, 2025",
    title: "MASTERING THE ART OF NATURAL MAKEUP FOR A HEALTHY, LUMINOUS GLOW",
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=700",
    alt: "Three women with glowing skin and makeup brushes",
  },
];

export default function ArticlesSection() {
  return (
    <section className="articles-section">
      {/* Header */}
      <div className="articles-head">
        <div className="articles-head-left">
          <p className="articles-eyebrow">LATEST ARTICLES</p>
          <h2 className="articles-title">
            2 MAKEUP HACKS EVERY WOMAN <span>SHOULD KNOW</span>
          </h2>
        </div>
      </div>

      {/* Cards: one <article> per object above */}
      <div className="articles-grid">
        {articles.map((a) => (
          <article key={a.id} className="article-card">
            <div className="article-meta">
              <span>{a.tag}</span>
              <span className="meta-sep">/</span>
              <span>{a.date}</span>
            </div>
            <h3 className="article-title">{a.title}</h3>
            <div className="article-img-wrap">
              <img src={a.img} alt={a.alt} loading="lazy" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}