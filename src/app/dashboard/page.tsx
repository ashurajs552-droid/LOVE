import Section from "@/components/Section";

function Card({ title, value, subtitle }: { title: string; value: string; subtitle?: string }) {
  return (
    <div className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800">
      <div className="text-sm text-zinc-600 dark:text-zinc-400">{title}</div>
      <div className="mt-2 text-2xl font-semibold">{value}</div>
      {subtitle && <div className="mt-1 text-xs text-zinc-500">{subtitle}</div>}
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Overview</h1>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Your learning and teaching snapshot</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Active Students" value="1,248" subtitle="+3.4% this week" />
        <Card title="Assignments Graded" value="3,572" subtitle="+182 today" />
        <Card title="Tutor Sessions" value="426" subtitle="24h" />
        <Card title="Avg. Mastery" value="78%" subtitle="District-wide" />
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800 lg:col-span-2">
          <div className="text-sm font-medium">Progress Analytics</div>
          <div className="mt-4 grid grid-cols-12 gap-2">
            {[60,64,62,70,68,72,75,73,78,80,79,82].map((h,i)=>(
              <div key={i} className="flex items-end">
                <div className="w-full rounded bg-blue-600" style={{height: `${h}%`}}></div>
              </div>
            ))}
          </div>
          <div className="mt-2 text-xs text-zinc-500">Last 12 weeks</div>
        </div>
        <div className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800">
          <div className="text-sm font-medium">Recent Activity</div>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>Graded Algebra II Quiz • 32 submissions</li>
            <li>Master Tutor session scheduled • 3:30pm</li>
            <li>New lesson plan generated • Grade 8 Science</li>
            <li>Compliance report exported • District</li>
          </ul>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800">
          <div className="text-sm font-medium">Upcoming Assignments</div>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>Biology Worksheet • Due Tue</li>
            <li>US History Essay • Due Fri</li>
            <li>Geometry Practice • Due Fri</li>
          </ul>
        </div>
        <div className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800">
          <div className="text-sm font-medium">Quick Actions</div>
          <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
            <button className="rounded-lg border border-zinc-200 px-3 py-2 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900">Create Assignment</button>
            <button className="rounded-lg border border-zinc-200 px-3 py-2 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900">Start Tutor</button>
            <button className="rounded-lg border border-zinc-200 px-3 py-2 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900">New Lesson Plan</button>
            <button className="rounded-lg border border-zinc-200 px-3 py-2 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900">Export Report</button>
          </div>
        </div>
      </div>
    </div>
  );
}
