import SlideProblem from '@/components/SlideProblem';
import SlideSolution from '@/components/SlideSolution';
import SlideComparison from '@/components/SlideComparison';

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
