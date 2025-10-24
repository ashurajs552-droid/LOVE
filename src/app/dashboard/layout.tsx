export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-[calc(100vh-56px-200px)] grid-cols-1 md:grid-cols-[240px_1fr]">
      <aside className="border-r border-zinc-200 p-4 dark:border-zinc-800">
        <div className="text-lg font-semibold">Dashboard</div>
        <nav className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
          <a href="/dashboard" className="block rounded px-2 py-1 hover:bg-zinc-100 dark:hover:bg-zinc-900">Overview</a>
          <a href="#" className="block rounded px-2 py-1 hover:bg-zinc-100 dark:hover:bg-zinc-900">Tools</a>
          <a href="#" className="block rounded px-2 py-1 hover:bg-zinc-100 dark:hover:bg-zinc-900">Analytics</a>
          <a href="#" className="block rounded px-2 py-1 hover:bg-zinc-100 dark:hover:bg-zinc-900">Settings</a>
        </nav>
      </aside>
      <section className="p-6">{children}</section>
    </div>
  );
}
