// components/SlideProblem.js

export default function SlideProblem() {
  return (
    <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '4rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>🚩 Problem am Markt</h1>
      <ul style={{ listStyle: 'none', padding: 0, maxWidth: '800px' }}>
        <li style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>❌ Langsame Druckgeschwindigkeit und geringer Durchsatz</li>
        <li style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>❌ Grobe Auflösung bei hohem Durchsatz</li>
        <li style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>❌ Große Bauteile: Verzerrungen, schlechte Detailqualität</li>
        <li style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>❌ Eingeschränkte Materialvielfalt bei großformatigen Druckern</li>
        <li style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>❌ Fehlende innovative Features wie Multi-Material- oder Bauraumheizung</li>
      </ul>
    </section>
  );
}
