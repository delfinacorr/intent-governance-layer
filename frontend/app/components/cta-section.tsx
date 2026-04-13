import Link from "next/link"

export default function CtaSection() {
  return (
    <section id="cta" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#08080e]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,91,245,0.12),transparent_60%)]" />
      {/* Decorative glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-accent/10 blur-[100px] animate-pulse-glow" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
          Build the Governance layer{" "}
          <span className="bg-gradient-to-r from-accent via-accent-light to-cyan bg-clip-text text-transparent">
            agents actually need
          </span>
        </h2>
        <p className="max-w-xl mx-auto text-lg text-gray-400 mb-10 leading-relaxed">
          Stop hoping your agents behave. Intercept, validate, and orchestrate every autonomous action on Stellar with a governance layer built for the agentic economy.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center rounded-xl bg-accent px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-accent-light hover:shadow-[0_0_40px_rgba(124,91,245,0.4)] hover:-translate-y-0.5"
          >
            Launch Control Plane
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <a
            href="#builders"
            className="inline-flex items-center justify-center rounded-xl border border-gray-600 px-8 py-4 text-base font-medium text-gray-400 transition-all duration-300 hover:text-white hover:border-gray-400"
          >
            View integration
          </a>
        </div>
      </div>
    </section>
  );
}
