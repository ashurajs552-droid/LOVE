import Section from "@/components/Section";
import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="bg-white text-zinc-900 dark:bg-black dark:text-zinc-100">
      <Section className="py-16">
        <h1 className="text-3xl font-semibold">Simple, Transparent Pricing</h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-300">Start with a 30-day free trial. No credit card required.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
            <div className="text-xl font-semibold">FREE</div>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Build confidence with essential teacher and student tools.</p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li>80+ teacher tools</li>
              <li>50+ student tools</li>
              <li>Master Tutor</li>
              <li>Student learning insights</li>
            </ul>
            <Link href="/auth/sign-up" className="mt-6 inline-block rounded-full bg-zinc-900 px-4 py-2 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200">Sign up free →</Link>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
            <div className="text-xl font-semibold">PLUS</div>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Unlimited generations and early access to new tools.</p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li>Unlimited generations</li>
              <li>Unlimited output history</li>
              <li>Advanced tool features</li>
              <li>Gradespark Labs</li>
            </ul>
            <Link href="/auth/sign-up" className="mt-6 inline-block rounded-full bg-zinc-900 px-4 py-2 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200">Start a free trial →</Link>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
            <div className="text-xl font-semibold">ENTERPRISE</div>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Customization, safety, and compliance for districts.</p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li>Custom Data Privacy Agreement</li>
              <li>Integrations with SIS, LMS</li>
              <li>Single Sign-On (SSO)</li>
              <li>Curriculum alignment</li>
            </ul>
            <Link href="/auth/sign-up" className="mt-6 inline-block rounded-full bg-zinc-900 px-4 py-2 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200">Book a demo →</Link>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-xl font-semibold">Frequently Asked Questions</h2>
          <div className="mt-4 space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
            <div>
              <div className="font-medium text-zinc-900 dark:text-zinc-100">Can I switch plans later?</div>
              <p>Yes, you can upgrade or downgrade at any time. Changes take effect next billing cycle.</p>
            </div>
            <div>
              <div className="font-medium text-zinc-900 dark:text-zinc-100">Is there a free trial?</div>
              <p>Yes, all plans include a 30-day free trial. No credit card required.</p>
            </div>
            <div>
              <div className="font-medium text-zinc-900 dark:text-zinc-100">Is my data secure?</div>
              <p>We're FERPA and COPPA compliant with enterprise-grade security.</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/auth/sign-up" className="rounded-full bg-zinc-900 px-5 py-3 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200">Start Free Trial</Link>
            <Link href="/demo" className="rounded-full border border-zinc-300 px-5 py-3 hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-900">Watch Demo</Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
