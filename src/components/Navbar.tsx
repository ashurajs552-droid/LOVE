import Link from "next/link";
import { cookies } from "next/headers";

export default async function Navbar() {
  const store = await cookies();
  const isAuthed = Boolean(store.get("session"));

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-black/60">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="font-semibold text-zinc-900 dark:text-zinc-100">Gradespark</Link>
        <nav className="hidden items-center gap-6 text-sm text-zinc-600 dark:text-zinc-300 md:flex">
          <Link href="/#features" className="hover:text-zinc-900 dark:hover:text-white">Features</Link>
          <Link href="/#solutions" className="hover:text-zinc-900 dark:hover:text-white">Solutions</Link>
          <Link href="/pricing" className="hover:text-zinc-900 dark:hover:text-white">Pricing</Link>
        </nav>
        <div className="flex items-center gap-3">
          {isAuthed ? (
            <>
              <Link href="/dashboard" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white">Dashboard</Link>
              <form action="/api/auth/logout?redirect=1" method="post">
                <button className="rounded-full border border-zinc-300 px-4 py-2 text-sm hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-900" type="submit">Logout</button>
              </form>
            </>
          ) : (
            <>
              <Link href="/auth/login" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white">Log in</Link>
              <Link href="/auth/sign-up" className="rounded-full bg-zinc-900 px-4 py-2 text-sm text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200">Start Free Trial</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
