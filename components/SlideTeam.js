// components/SlideTeam.js

export default function SlideTeam() {
  return (
    <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '4rem', textAlign: 'center', backgroundColor: '#f9f9f9' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>👥 Unser Team</h1>
      <ul style={{ listStyle: 'none', padding: 0, maxWidth: '800px' }}>
        <li style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>👤 Marvin Bauch — Maschinenbau, IT, Unternehmensführung</li>
        <li style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>👤 Joshua — Konstruktion, Kinematik-Experte</li>
        <li style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>👤 Ilse Humboldt — Marketing & Wirtschaft</li>
        <li style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>👤 Julia Federspiel — Showcase-Design & Marketing Support</li>
        <li style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>👤 Alexander Schulz — IT-Experte, UI-Design</li>
      </ul>
    </section>
  );
}