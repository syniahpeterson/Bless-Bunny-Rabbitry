export default function StatCard({ icon: Icon, value, label }) {
  return (
    <article className="flex flex-col items-center rounded-3xl border border-border bg-white px-8 py-10 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      {/* Icon Circle */}
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-sage/70">
        <Icon aria-hidden="true" className="h-10 w-10 text-white" />
      </div>
      {/* Value */}
      <p className="font-serif text-6xl font-bold leading-none text-forest">
        {value}
      </p>
      {/* Divider */}
      <div
        className="my-6 h-px w-full max-w-[220px] bg-border"
        aria-hidden="true"
      />
      {/* Label */}
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-text">
        {label}
      </p>
    </article>
  );
}
