export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white py-10 text-sm text-zinc-600 dark:border-zinc-800 dark:bg-black dark:text-zinc-400">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-zinc-900 dark:text-zinc-100">Gradespark</span>
        </div>
        <nav className="flex items-center gap-6">
          <a href="/" className="hover:text-zinc-900 dark:hover:text-white">Features</a>
          <a href="/" className="hover:text-zinc-900 dark:hover:text-white">Solutions</a>
          <a href="/pricing" className="hover:text-zinc-900 dark:hover:text-white">Pricing</a>
        </nav>
      </div>
      <div className="mx-auto mt-6 max-w-6xl px-4 text-xs text-zinc-500 dark:text-zinc-500">
        © 2025 Gradespark. All rights reserved.
      </div>
    </footer>
  );
}
