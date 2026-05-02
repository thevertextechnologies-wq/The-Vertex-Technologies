import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";

export default function CTASection({
  eyebrow = "Start your transformation",
  title = "Ready to build a scalable, future‑ready business?",
  body = "Move beyond manual operations and unpredictable growth. Implement intelligent systems engineered for long‑term success.",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
}) {
  return (
    <section className="py-24 md:py-32 bg-[var(--ink)] text-[var(--cream)] grain relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 60% at 20% 20%, color-mix(in oklab, var(--brand-orange) 40%, transparent), transparent 60%), radial-gradient(50% 50% at 90% 80%, color-mix(in oklab, var(--brand-blue) 35%, transparent), transparent 60%)",
        }}
      />
      <div className="container-x relative">
        <div className="max-w-4xl">
          <Reveal>
            <span className="pill !bg-white/10 !text-white !border-white/15">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: "var(--brand-orange)" }}
              />
              {eyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-display text-5xl md:text-7xl mt-6 text-balance">
              {title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl">{body}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-bold text-white transition-all hover:-translate-y-0.5"
                style={{ background: "var(--brand-red)", boxShadow: "0 14px 32px -12px rgba(218,72,56,0.55)" }}
              >
                Contact Us →
              </Link>
              <Link
                to="/contact"
                className="btn-outline !border-white/40 !text-white hover:!bg-white hover:!text-[var(--ink)]"
              >
                Get a Custom Growth Plan
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
