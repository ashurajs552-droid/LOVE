"use client";
import Link from "next/link";
import Section from "@/components/Section";
import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function SignUpContent() {
  const router = useRouter();
  const search = useSearchParams();
  const next = search.get("next") || "/dashboard";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    fetch("/api/auth/sign-up", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then(async (res) => {
        if (!res.ok) {
          const data = await res.json().catch(() => ({}));
          throw new Error(data?.error || "Sign up failed");
        }
        router.push(next);
      })
      .catch((err: unknown) => {
        setError(err instanceof Error ? err.message : "Sign up failed");
      })
      .finally(() => setLoading(false));
  };

  return (
    <Section className="py-16">
      <div className="mx-auto max-w-md">
        <h1 className="text-3xl font-semibold">Create your account</h1>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Start your 30-day free trial</p>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Already have an account? <Link href="/auth/login" className="underline">Log in</Link>
        </p>

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div>
            <label className="text-sm">Email</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" required className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 outline-none ring-blue-500 focus:ring-2 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100" />
          </div>
          <div>
            <label className="text-sm">Password</label>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" required className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 outline-none ring-blue-500 focus:ring-2 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100" />
          </div>
          {error && <div className="rounded-md border border-red-300 bg-red-50 p-2 text-sm text-red-700 dark:border-red-800 dark:bg-red-950/40 dark:text-red-300">{error}</div>}
          <button disabled={loading} type="submit" className="w-full rounded-full bg-zinc-900 px-4 py-2 text-white hover:bg-zinc-800 disabled:opacity-50 dark:bg-white dark:text-black dark:hover:bg-zinc-200">{loading ? "Creating account..." : "Create account"}</button>
        </form>
      </div>
    </Section>
  );
}

export default function SignUpPage() {
  return (
    <Suspense fallback={<div />}> 
      <SignUpContent />
    </Suspense>
  );
}
