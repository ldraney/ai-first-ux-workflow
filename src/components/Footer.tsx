import { Github, ExternalLink, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="py-16 px-6 border-t border-slate-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Let's Talk About Your Specs
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Have requirements that need to become UI? I'd love to discuss
            how spec-driven development could work for your team.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="https://github.com/ldraney"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg transition-colors"
          >
            <Github className="h-5 w-5" />
            GitHub
          </a>
          <a
            href="https://compliance-dashboard-demo.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg transition-colors"
          >
            <ExternalLink className="h-5 w-5" />
            Live Demo
          </a>
          <a
            href="mailto:contact@example.com"
            className="inline-flex items-center gap-2 px-5 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors"
          >
            <Mail className="h-5 w-5" />
            Get in Touch
          </a>
        </div>

        <div className="text-center text-sm text-slate-500">
          <p>
            Built with React, TypeScript, and Tailwind CSS.
            Deployed on GitHub Pages.
          </p>
          <p className="mt-2">
            This page was generated from a markdown spec using the same workflow it describes.
          </p>
        </div>
      </div>
    </footer>
  );
}
