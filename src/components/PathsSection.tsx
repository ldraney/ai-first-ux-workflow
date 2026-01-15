import { Palette, ArrowRight, Check, Sparkles } from 'lucide-react';

export function PathsSection() {
  return (
    <section id="paths" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          Two Paths Forward
        </h2>
        <p className="text-lg text-slate-400 mb-16 text-center max-w-2xl mx-auto">
          I can work either direction. Here's how each approach looks.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Path A: Figma */}
          <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-slate-800 rounded-lg">
                <Palette className="h-5 w-5 text-slate-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Path A: Spec to Figma to Code</h3>
                <p className="text-sm text-slate-500">Traditional workflow</p>
              </div>
            </div>

            {/* Mini diagram */}
            <div className="flex items-center gap-2 py-4 mb-4 border-y border-slate-800">
              <span className="text-xs text-slate-500">Spec</span>
              <ArrowRight className="h-3 w-3 text-slate-600" />
              <span className="text-xs text-slate-500">Figma</span>
              <ArrowRight className="h-3 w-3 text-slate-600" />
              <span className="text-xs text-slate-500">Code</span>
            </div>

            <p className="text-slate-400 text-sm mb-4">
              If your team requires Figma deliverables, I can work this way:
            </p>

            <ul className="space-y-2 mb-6">
              {[
                'AI-assisted design generation with Figma MCP',
                'Component-based file structure',
                'Auto-layout, design tokens, proper naming',
                'Handoff-ready with Dev Mode specs',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                  <Check className="h-4 w-4 text-slate-500 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="p-3 bg-slate-800/50 rounded-lg">
              <p className="text-xs text-slate-500">
                <span className="text-slate-400">Honest take:</span> It works, but adds a translation layer
                where requirements can drift.
              </p>
            </div>
          </div>

          {/* Path B: Direct */}
          <div className="bg-gradient-to-br from-indigo-950/50 to-slate-900 rounded-xl p-6 border border-indigo-800/50 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="px-2 py-1 bg-indigo-600/20 text-indigo-400 text-xs font-medium rounded-full border border-indigo-600/30">
                Recommended
              </span>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-indigo-900/50 rounded-lg">
                <Sparkles className="h-5 w-5 text-indigo-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Path B: Spec to Code Directly</h3>
                <p className="text-sm text-indigo-400">One translation layer</p>
              </div>
            </div>

            {/* Mini diagram */}
            <div className="flex items-center gap-2 py-4 mb-4 border-y border-indigo-800/30">
              <span className="text-xs text-indigo-400">Spec</span>
              <ArrowRight className="h-3 w-3 text-indigo-600" />
              <span className="text-xs text-indigo-400">Code</span>
              <span className="text-xs text-slate-600 ml-2">(skip Figma)</span>
            </div>

            <p className="text-slate-300 text-sm mb-4">
              Why this might be better for your team:
            </p>

            <ul className="space-y-2 mb-6">
              {[
                'One translation layer instead of two',
                'Every UI element traces back to a spec line',
                'Working software, not static mockups',
                'Stakeholder review via preview URL, not Figma link',
                'Iteration on qualitative stuff (color, spacing) — not structure',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-200">
                  <Check className="h-4 w-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="p-3 bg-indigo-900/30 rounded-lg border border-indigo-800/30">
              <p className="text-xs text-indigo-300">
                <span className="text-indigo-200 font-medium">Key insight:</span> "Does line 14 of the spec appear in the UI? Yes/no."
                — That's a checkable question.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
