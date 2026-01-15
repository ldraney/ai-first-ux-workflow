import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { PathsSection } from './components/PathsSection';
import { DemoSection } from './components/DemoSection';
import { ToolkitSection } from './components/ToolkitSection';
import { FigmaFallback } from './components/FigmaFallback';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      <main>
        <Hero />
        <ProblemSection />
        <PathsSection />
        <DemoSection />
        <ToolkitSection />
        <FigmaFallback />
      </main>
      <Footer />
    </div>
  );
}

export default App;
