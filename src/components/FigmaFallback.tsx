import { ArrowRight } from 'lucide-react';

export function FigmaFallback() {
  return (
    <section className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          What If You Really Want Figma?
        </h2>
        <p className="text-lg text-slate-400 mb-8 max-w-2xl">
          If Figma deliverables are non-negotiable for your team, I can do it.
          Here's how I'd approach it:
        </p>

        <div className="space-y-4">
          {/* Option 1 */}
          <div className="p-5 bg-slate-800/50 rounded-xl border border-slate-700">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-2 py-0.5 bg-slate-700 text-slate-300 text-xs font-medium rounded">
                Option 1
              </span>
              <h3 className="font-medium text-white">Code-First, Figma as Documentation</h3>
            </div>
            <div className="flex items-center gap-2 mb-3 text-sm">
              <span className="text-slate-400">Spec</span>
              <ArrowRight className="h-3 w-3 text-slate-600" />
              <span className="text-indigo-400">Code</span>
              <ArrowRight className="h-3 w-3 text-slate-600" />
              <span className="text-slate-400">Figma (documentation)</span>
            </div>
            <p className="text-sm text-slate-400">
              Generate UI in code first, then create Figma documentation for handoff.
              Code stays source of truth, Figma becomes a communication artifact.
            </p>
          </div>

          {/* Option 2 */}
          <div className="p-5 bg-slate-800/50 rounded-xl border border-slate-700">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-2 py-0.5 bg-slate-700 text-slate-300 text-xs font-medium rounded">
                Option 2
              </span>
              <h3 className="font-medium text-white">Figma MCP Direct Generation</h3>
            </div>
            <div className="flex items-center gap-2 mb-3 text-sm">
              <span className="text-slate-400">Spec</span>
              <ArrowRight className="h-3 w-3 text-slate-600" />
              <span className="text-slate-400">Figma (via MCP)</span>
              <ArrowRight className="h-3 w-3 text-slate-600" />
              <span className="text-slate-400">Code</span>
            </div>
            <p className="text-sm text-slate-400">
              Use Figma MCP to generate screens directly from specs with proper
              component structure, auto-layout, and design tokens.
            </p>
          </div>
        </div>

        <div className="mt-8 p-4 bg-amber-950/30 border border-amber-900/50 rounded-xl">
          <p className="text-sm text-amber-200">
            <span className="font-medium">Honest take:</span> If Figma-first is required,
            I can deliver quality work. But you're adding a translation step that
            the direct approach avoids. Worth discussing which makes sense for your project.
          </p>
        </div>
      </div>
    </section>
  );
}
