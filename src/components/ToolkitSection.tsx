import { FolderTree, Github, Chrome, TestTube, Wrench } from 'lucide-react';

const tools = [
  {
    icon: FolderTree,
    name: 'Filesystem MCP',
    description: 'Codebase navigation, file operations, project scaffolding',
  },
  {
    icon: Github,
    name: 'GitHub MCP',
    description: 'Repo management, PR creation, issue tracking',
  },
  {
    icon: Chrome,
    name: 'Chrome DevTools MCP',
    description: 'Live UI iteration, performance profiling, debugging',
  },
  {
    icon: TestTube,
    name: 'Playwright MCP',
    description: 'Visual testing, automated QA, screenshot verification',
  },
];

export function ToolkitSection() {
  return (
    <section id="toolkit" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          MCP Toolkit
        </h2>
        <p className="text-lg text-slate-400 mb-12 max-w-2xl">
          The Model Context Protocol servers I use daily to bridge AI capabilities
          with development workflows.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {tools.map((tool, i) => {
            const Icon = tool.icon;
            return (
              <div
                key={i}
                className="p-5 bg-slate-900 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-slate-800 rounded-lg">
                    <Icon className="h-5 w-5 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white mb-1">{tool.name}</h3>
                    <p className="text-sm text-slate-400">{tool.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-start gap-3 p-4 bg-indigo-950/30 border border-indigo-900/50 rounded-xl">
          <Wrench className="h-5 w-5 text-indigo-400 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-indigo-200">
            <span className="font-medium">Note:</span> I build MCP servers, not just use them.
            If your workflow needs custom tooling, I can create it.
          </p>
        </div>
      </div>
    </section>
  );
}
