import Section from "@/components/Section";
import Link from "next/link";

export default function DemoPage() {
  return (
    <div className="bg-white text-zinc-900 dark:bg-black dark:text-zinc-100">
      <Section className="py-16">
        <h1 className="text-3xl font-semibold">Experience Gradespark in Action</h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-300">See how AI-powered education transforms learning for students, educators, and administrators</p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
            <div className="text-lg font-medium">Student Dashboard</div>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Explore personalized learning paths and interact with AI tutors</p>
            <Link href="/auth/login" className="mt-4 inline-block rounded-full bg-zinc-900 px-4 py-2 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200">Try Student Demo</Link>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
            <div className="text-lg font-medium">Educator Tools</div>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Create AI-powered lessons and track student progress</p>
            <Link href="/auth/login" className="mt-4 inline-block rounded-full bg-zinc-900 px-4 py-2 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200">Try Educator Demo</Link>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
            <div className="text-lg font-medium">Admin Analytics</div>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Monitor district-wide performance and manage resources</p>
            <Link href="/auth/login" className="mt-4 inline-block rounded-full bg-zinc-900 px-4 py-2 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200">Try Admin Demo</Link>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {["AI-Powered Tutoring","Smart Grading","Progress Analytics","Adaptive Learning","Collaboration Tools","FERPA Compliant"].map((t) => (
            <div key={t} className="rounded-xl border border-zinc-200 p-6 text-sm dark:border-zinc-800">
              {t}
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/auth/sign-up" className="rounded-full bg-zinc-900 px-5 py-3 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200">Start Free Trial</Link>
          <Link href="/pricing" className="rounded-full border border-zinc-300 px-5 py-3 hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-900">View Pricing</Link>
        </div>
      </Section>
    </div>
  );
}
