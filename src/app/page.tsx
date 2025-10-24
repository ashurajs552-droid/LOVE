import Link from "next/link";
import Section from "@/components/Section";

export default function Home() {
  return (
    <div className="bg-white text-zinc-900 dark:bg-black dark:text-zinc-100">
      <Section className="py-20 text-center md:text-left">
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Transform Learning with
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Intelligent AI Tools</span>
            </h1>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">Empower educators and students with AI-powered tools designed for modern K-12 education.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/auth/sign-up" className="rounded-full bg-zinc-900 px-5 py-3 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200">Start Free Trial</Link>
              <Link href="/demo" className="rounded-full border border-zinc-300 px-5 py-3 hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-900">Watch Demo</Link>
            </div>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-10 dark:border-zinc-800">
            <div className="grid grid-cols-3 gap-4 text-center text-sm">
              <div className="rounded-lg bg-zinc-50 p-6 dark:bg-zinc-900">
                <div className="text-2xl font-bold">130+</div>
                <div className="mt-1 text-zinc-500">AI Tools</div>
              </div>
              <div className="rounded-lg bg-zinc-50 p-6 dark:bg-zinc-900">
                <div className="text-2xl font-bold">24/7</div>
                <div className="mt-1 text-zinc-500">AI Tutor</div>
              </div>
              <div className="rounded-lg bg-zinc-50 p-6 dark:bg-zinc-900">
                <div className="text-2xl font-bold">K-12</div>
                <div className="mt-1 text-zinc-500">Focused</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="features" className="py-16">
        <h2 className="text-2xl font-semibold">Comprehensive AI Tools</h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-300">Everything educators and students need to succeed in one platform</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {["24/7 AI Tutoring","Assignment Builder","Study Tools Suite","Learning Analytics","Content Creation","Collaboration Tools"].map((t) => (
            <div key={t} className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
              <div className="text-lg font-medium">{t}</div>
              <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Powerful capabilities to accelerate outcomes.</div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="solutions" className="py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
            <div className="text-xl font-semibold">For Educators</div>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li>80+ teacher tools</li>
              <li>Automated grading</li>
              <li>Real-time analytics</li>
            </ul>
          </div>
          <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
            <div className="text-xl font-semibold">For Students</div>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li>24/7 AI tutoring</li>
              <li>Study guides & flashcards</li>
              <li>Progress tracking</li>
            </ul>
          </div>
          <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
            <div className="text-xl font-semibold">For Leadership</div>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li>District analytics</li>
              <li>Compliance monitoring</li>
              <li>Custom reporting</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/auth/sign-up" className="rounded-full bg-zinc-900 px-5 py-3 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200">Start Free Trial</Link>
          <Link href="/pricing" className="rounded-full border border-zinc-300 px-5 py-3 hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-900">View Pricing</Link>
        </div>
      </Section>
    </div>
  );
}
