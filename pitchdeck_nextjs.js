// 1. Projekt anlegen: `npx create-next-app@latest my-pitch-website`
// 2. In das Verzeichnis gehen: `cd my-pitch-website`
// 3. Beispielhafte Startseite anlegen:

// pages/index.js

export default function Home() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1>Blaupause 3D</h1>
        <p>Building the Future, Layer by Layer</p>
      </header>

      <section style={{ marginBottom: '3rem' }}>
        <h2>🚩 Problem</h2>
        <p>
          Große 3D-Druckteile sind teuer, langsam und schwer zugänglich. Branchen wie Kunst, Design und Prototyping leiden unter mangelnder Flexibilität und Geschwindigkeit.
        </p>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2>💡 Lösung</h2>
        <p>
          Blaupause 3D entwickelt einen hochdynamischen Großformat-3D-Drucker, der Geschwindigkeit, Präzision und Zugänglichkeit kombiniert — für neue Möglichkeiten in Prototyping und Design.
        </p>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2>🎥 Produkt-Demo</h2>
        <video width="100%" controls>
          <source src="/demo-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2>📈 Marktchancen</h2>
        <p>
          Der Markt für Großformat-3D-Druck wächst jährlich um 23%. Unser Fokus liegt auf Kunstgießereien, Möbelindustrie und Prototypenbau.
        </p>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2>👥 Team</h2>
        <ul>
          <li>Marvin Bauch — Maschinenbau & Prototyping</li>
          <li>Julia Federspiel — Design & 3D-Kunst</li>
        </ul>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2>🛤️ Roadmap</h2>
        <ul>
          <li>2025: Prototyp & Pilotkunden</li>
          <li>2026: Serienproduktion & Markteintritt</li>
          <li>2027: Internationaler Rollout</li>
        </ul>
      </section>

      <footer style={{ textAlign: 'center', marginTop: '4rem' }}>
        <h2>📬 Interesse?</h2>
        <p>Kontaktiere uns: <a href="mailto:info@blaupause.studio">info@blaupause.studio</a></p>
      </footer>
    </div>
  );
}

// 4. Deployment auf Vercel:
//    - Repository auf GitHub erstellen
//    - Projekt pushen
//    - Auf vercel.com gehen, "New Project" -> GitHub Repo auswählen -> deploy!
