export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <article className="rounded-3xl border border-gray-warm bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-sage/20">
        <Icon aria-hidden="true" className="text-4xl text-forest" />
      </div>

      <h3 className="mb-4 text-xl font-semibold text-forest">{title}</h3>

      <div className="mx-auto mb-4 h-px w-16 bg-gray-warm" />

      <p className="leading-7 text-text">{description}</p>
    </article>
  );
}
