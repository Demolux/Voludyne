import SlideProblem from '../components/SlideProblem';
import SlideSolution from '../components/SlideSolution';
import SlideInnovation from '../components/SlideInnovation';
import SlideTeam from '../components/SlideTeam';
import SlideVision from '../components/SlideVision';
import Logo from '../components/Logo';

export default function Home() {
  return (
    <main>
      <Logo />
      <SlideProblem />
      <SlideSolution />
      <SlideInnovation />
      <SlideTeam />
      <SlideVision />
    </main>
  );
}

