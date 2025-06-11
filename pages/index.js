import SlideIntro from '../components/SlideIntro';
import SlideProblem from '../components/SlideProblem';
import SlideSolution from '../components/SlideSolution';
import SlideInnovation from '../components/SlideInnovation';
import SlideTeam from '../components/SlideTeam';
import SlideVision from '../components/SlideVision';
import Logo from '../components/Logo';
import ScrollProgress from '../components/ScrollProgress';

export default function Home() {
  return (
    <main style={{
		  height: '100vh',
		  overflowY: 'scroll',
		  scrollSnapType: 'y mandatory',
		}}>
      <Logo />
      <ScrollProgress />
      <SlideIntro />
      <SlideProblem />
      <SlideSolution />
      <SlideComparison />
      {/* weitere Slides folgen */}
    </main>
  );
}

