import { createFileRoute } from "@tanstack/react-router";
import PageLayout from "@/components/PageLayout";
import PageBanner from "@/components/PageBanner";
import bannerCases from "@/assets/banner-cases.jpg";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — The Vertex Technologies" },
      {
        name: "description",
        content:
          "Real results across AI, marketing and growth. See how Vertex helps businesses operate efficiently and scale predictably.",
      },
      { property: "og:title", content: "Case Studies — The Vertex Technologies" },
      {
        property: "og:description",
        content: "Real outcomes from intelligent systems and growth strategy.",
      },
    ],
  }),
  component: CaseStudiesPage,
});

const cases = [
  {
    tag: "AI Operations",
    color: "var(--brand-red)",
    title: "AI‑driven operations upgrade",
    body: "A growing service business struggled with manual workflows and delayed responses. By deploying AI-powered workflows and optimizing internal processes, we helped them increase efficiency, reduce operational load and scale without complexity.",
    stats: [{ k: "Efficiency", v: "↑ Significant" }, { k: "Manual load", v: "Reduced" }],
  },
  {
    tag: "Marketing Systems",
    color: "var(--brand-blue)",
    title: "Marketing system restructuring",
    body: "A B2B company lacked consistent leads and visibility. We built structured funnels, applied AI-assisted targeting and set up performance tracking — producing a predictable lead pipeline, higher conversion rates and improved ROI.",
    stats: [{ k: "Pipeline", v: "Predictable" }, { k: "ROI", v: "Improved" }],
  },
  {
    tag: "Startup Strategy",
    color: "var(--brand-orange)",
    title: "Startup growth structuring",
    body: "An early-stage startup had a viable idea but unclear execution. We refined the business model, built a market positioning strategy and implemented founder productivity frameworks — gaining clear direction, faster execution and a stronger market presence.",
    stats: [{ k: "Direction", v: "Clear" }, { k: "Execution", v: "Faster" }],
  },
  {
    tag: "Revenue",
    color: "var(--brand-green)",
    title: "Revenue optimization framework",
    body: "An established business operated below its potential due to inefficiencies. Through process restructuring, revenue gap analysis and strategic alignment, we improved profitability, operational control and resource efficiency.",
    stats: [{ k: "Profitability", v: "Improved" }, { k: "Efficiency", v: "↑" }],
  },
];

function CaseStudiesPage() {
  return (
    <PageLayout>
      <PageBanner
        eyebrow="Case Studies"
        title="Real results across AI, marketing and growth."
        intro="Outcomes that help businesses operate efficiently, scale predictably and achieve measurable growth — across industries."
        image={bannerCases}
        dark={false}
      />

      <section className="py-20">
        <div className="container-x">
          <Stagger className="grid md:grid-cols-2 gap-6">
            {cases.map((c) => (
              <StaggerItem
                key={c.title}
                className="card-tile p-8 md:p-10 bg-card h-full relative overflow-hidden"
              >
                <div
                  className="absolute -top-12 -right-12 h-44 w-44 rounded-full blur-3xl opacity-40"
                  style={{ background: c.color }}
                />
                <span
                  className="text-xs font-semibold uppercase tracking-[0.16em]"
                  style={{ color: c.color }}
                >
                  {c.tag}
                </span>
                <h3 className="mt-3 font-display text-3xl font-bold leading-tight">
                  {c.title}
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{c.body}</p>
                <div className="mt-6 flex gap-3 flex-wrap">
                  {c.stats.map((s) => (
                    <div
                      key={s.k}
                      className="rounded-xl border border-border px-4 py-2"
                    >
                      <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                        {s.k}
                      </p>
                      <p className="font-display font-bold">{s.v}</p>
                    </div>
                  ))}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-24 bg-[var(--surface)]">
        <div className="container-x">
          <SectionHeader
            eyebrow="What these case studies show"
            title="AI, marketing and growth strategy — working as one."
          />
          <Stagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { t: "Smarter, automated operations", c: "var(--brand-red)" },
              { t: "Predictable, high-performing marketing", c: "var(--brand-blue)" },
              { t: "Strategic growth frameworks", c: "var(--brand-orange)" },
              { t: "Scalable, long-term systems", c: "var(--brand-green)" },
            ].map((p) => (
              <StaggerItem key={p.t} className="card-tile p-6 bg-card">
                <div className="h-2 w-12 rounded-full" style={{ background: p.c }} />
                <p className="mt-4 font-display font-bold text-lg leading-tight">
                  {p.t}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTASection
        eyebrow="Ready for similar results?"
        title="Scale with intelligent systems and proven frameworks."
      />
    </PageLayout>
  );
}
