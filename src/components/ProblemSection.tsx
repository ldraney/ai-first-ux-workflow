import { FileText, Palette, Code, AlertTriangle, ArrowRight } from 'lucide-react';

export function ProblemSection() {
  return (
    <section id="problem" className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          The Problem
        </h2>
        <p className="text-lg text-slate-400 mb-12 max-w-2xl">
          Specs need to become UI. But the traditional workflow introduces
          two translation layers where requirements get lost.
        </p>

        {/* Traditional workflow diagram */}
        <div className="bg-slate-800/50 rounded-xl p-6 md:p-8 border border-slate-700 mb-8">
          <p className="text-sm text-slate-500 uppercase tracking-wider mb-6">Traditional Workflow</p>

          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-700 rounded-lg">
              <FileText className="h-4 w-4 text-slate-400" />
              <span className="text-sm text-slate-300">Spec</span>
            </div>

            <ArrowRight className="h-4 w-4 text-slate-600" />

            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 px-4 py-2 bg-amber-900/30 border border-amber-700/50 rounded-lg">
                <span className="text-sm text-amber-400">Designer interprets</span>
              </div>
              <span className="text-xs text-amber-500/70 mt-1">Translation #1</span>
            </div>

            <ArrowRight className="h-4 w-4 text-slate-600" />

            <div className="flex items-center gap-2 px-4 py-2 bg-slate-700 rounded-lg">
              <Palette className="h-4 w-4 text-slate-400" />
              <span className="text-sm text-slate-300">Figma</span>
            </div>

            <ArrowRight className="h-4 w-4 text-slate-600" />

            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 px-4 py-2 bg-amber-900/30 border border-amber-700/50 rounded-lg">
                <span className="text-sm text-amber-400">Dev interprets</span>
              </div>
              <span className="text-xs text-amber-500/70 mt-1">Translation #2</span>
            </div>

            <ArrowRight className="h-4 w-4 text-slate-600" />

            <div className="flex items-center gap-2 px-4 py-2 bg-slate-700 rounded-lg">
              <Code className="h-4 w-4 text-slate-400" />
              <span className="text-sm text-slate-300">Code</span>
            </div>
          </div>
        </div>

        {/* Pain point callout */}
        <div className="flex items-start gap-4 p-5 bg-red-950/30 border border-red-900/50 rounded-xl">
          <AlertTriangle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-red-200 font-medium mb-1">The recurring question:</p>
            <p className="text-red-300/80 italic">
              "Does this actually match what we asked for?"
            </p>
            <p className="text-sm text-red-400/60 mt-2">
              Answering this requires manual checking at every handoff. Requirements drift.
              Scope creeps. Nobody's sure if line 14 of the spec is actually in the UI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
