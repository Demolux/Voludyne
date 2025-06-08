import SlideProblem from '../components/SlideProblem';
import SlideSolution from '../components/SlideSolution';
import SlideInnovation from '../components/SlideInnovation';
import SlideTeam from '../components/SlideTeam';
import SlideVision from '../components/SlideVision';

export default function Home() {
  return (
    <main>
      <SlideProblem />
      <SlideSolution />
      <SlideInnovation />
      <SlideTeam />
      <SlideVision />
    </main>
  );
}