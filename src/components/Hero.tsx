import { ArrowDown, GitBranch } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 pb-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm mb-8">
          <GitBranch className="h-4 w-4" />
          AI-First Development Workflow
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Spec-Driven UI Development
        </h1>

        <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl mx-auto">
          From markdown requirements to production UI — <br className="hidden md:block" />
          <span className="text-slate-200">traceable, verifiable, fast.</span>
        </p>

        <p className="text-slate-500 mb-12 max-w-xl mx-auto">
          I can work either direction: Spec to Figma to Code, or Spec directly to Code.
          Here's why direct-to-code might be better for your team.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#demo"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg transition-colors"
          >
            See Live Demo
          </a>
          <a
            href="#problem"
            className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium rounded-lg transition-colors"
          >
            Learn the Approach
          </a>
        </div>

        <a
          href="#problem"
          className="inline-flex items-center gap-2 mt-16 text-slate-500 hover:text-slate-300 transition-colors animate-bounce"
        >
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}
