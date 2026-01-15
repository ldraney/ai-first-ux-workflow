import { ExternalLink, CheckCircle2, FileCode } from 'lucide-react';

const specMappings = [
  {
    spec: 'Display summary cards showing: Total Pending, Due Today, Overdue, Completed This Week',
    component: '<SummaryCards />',
    line: '7-8',
  },
  {
    spec: 'Cards should use color coding: neutral for pending, amber for due today, red for overdue, green for completed',
    component: 'Tailwind color classes in SummaryCards',
    line: '9',
  },
  {
    spec: 'Clicking a card filters the table below to that status',
    component: 'onClick → setFilterType() in useDocuments',
    line: '10',
  },
  {
    spec: 'Sortable table with columns: Document Name, Submitted By, Department, Due Date, Status, Actions',
    component: '<DocumentTable /> + <TableRow />',
    line: '13',
  },
  {
    spec: 'Status badges: Pending Review, In Progress, Approved, Rejected, Overdue',
    component: '<Badge status={} />',
    line: '14',
  },
  {
    spec: 'Pagination (10 items per page)',
    component: '<Pagination /> + ITEMS_PER_PAGE const',
    line: '16',
  },
  {
    spec: 'Search/filter by document name or submitter',
    component: '<SearchInput /> + filter logic in useDocuments',
    line: '17',
  },
  {
    spec: 'Bulk select documents for batch approval',
    component: '<QuickActions /> + selectedIds state',
    line: '20',
  },
  {
    spec: 'Export filtered list to CSV',
    component: 'exportToCsv() in useDocuments',
    line: '22',
  },
  {
    spec: 'Dark mode default with light mode toggle',
    component: 'useTheme() hook + Header toggle',
    line: '27',
  },
];

export function DemoSection() {
  return (
    <section id="demo" className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Spec-to-UI Mapping
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Every checkbox in the spec has a corresponding element in the UI.
            Here's how the compliance dashboard maps spec lines to components.
          </p>
        </div>

        {/* Live demo link */}
        <div className="flex justify-center mb-12">
          <a
            href="https://compliance-dashboard-demo.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-medium rounded-xl transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
          >
            <FileCode className="h-5 w-5" />
            <span>View Live Dashboard Demo</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        {/* Mapping table */}
        <div className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-700 bg-slate-800/50">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-emerald-400" />
              <span className="font-medium text-white">Acceptance Criteria → Implementation</span>
            </div>
            <p className="text-sm text-slate-400 mt-1">
              From CLAUDE.md spec file to React components
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                    Line
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                    Spec Requirement
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                    Implementation
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/50">
                {specMappings.map((mapping, i) => (
                  <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-slate-500 font-mono">
                      #{mapping.line}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-300">
                      {mapping.spec}
                    </td>
                    <td className="px-6 py-4 text-sm text-indigo-400 font-mono">
                      {mapping.component}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Source link */}
        <div className="mt-6 text-center">
          <a
            href="https://github.com/ldraney/compliance-dashboard-demo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200 transition-colors"
          >
            View source code on GitHub
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
