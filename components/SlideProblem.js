import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export default function SlideProblem() {
  const data = {
    labels: [
      'Druckvolumen',
      'Durchsatz',
      'Detailgenauigkeit',
      'Zuverlässigkeit',
      'Designfreiheit',
      'Setup-Zeit'
    ],
    datasets: [
      {
        label: 'Voludyne',
        data: [9, 10, 9, 8, 9, 9],
        backgroundColor: 'rgba(255, 99, 132, 0.4)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
      },
      {
        label: 'Wettbewerb A',
        data: [8, 4, 5, 6, 5, 4],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Pelletdrucker',
        data: [9, 9, 3, 4, 2, 5],
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      r: {
        min: 0,
        max: 10,
        ticks: {
          stepSize: 2,
          display: false,
        },
        pointLabels: {
          font: {
            size: 14,
          },
        },
        grid: {
          color: '#444',
        },
      },
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#eee',
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <section style={{
      height: '100vh',
      scrollSnapAlign: 'start',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '5%',
      backgroundColor: '#111',
      color: 'white'
    }}>
      <div style={{ flex: 1, paddingRight: '5%' }}>
        <h2 style={{ fontSize: '2.8rem', marginBottom: '1rem' }}>
          Große Teile drucken – mit kleinen Kompromissen?
        </h2>
        <p style={{ fontSize: '1.3rem', marginBottom: '1.2rem' }}>
          Wer heute große Teile mit hoher Präzision drucken will, hat ein Problem:
        </p>
        <ul style={{ fontSize: '1.1rem', lineHeight: '1.8em' }}>
          <li>Lange Druckzeiten bei präziser Auflösung</li>
          <li>Detailverlust bei hohem Volumen</li>
          <li>Hohe Travel-Speed ≠ echter Durchsatz</li>
          <li>Alternativen wie Pelletdruck: schnell, aber unpräzise</li>
          <li>Fehleranfällig und aufwendig in Setup & Wartung</li>
        </ul>
      </div>

      <div style={{ flex: 1, maxWidth: '600px' }}>
        <Radar data={data} options={options} />
      </div>
    </section>
  );
}
