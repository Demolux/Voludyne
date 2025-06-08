import SlideProblem from '../components/SlideProblem';
import SlideSolution from '../components/SlideSolution';
import SlideInnovation from '../components/SlideInnovation';
import SlideTeam from '../components/SlideTeam';
import SlideVision from '../components/SlideVision';
import Logo from '../components/Logo';
import ScrollProgress from '../components/ScrollProgress';

export default function Home() {
  return (
    <main>
      <Logo />
	  <ScrollProgress />
      <SlideProblem />
      <SlideSolution />
      <SlideInnovation />
      <SlideTeam />
      <SlideVision />
    </main>
  );
}

