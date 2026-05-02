import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
  invert = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  invert?: boolean;
}) {
  return (
    <div className={align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}>
      {eyebrow && (
        <Reveal>
          <span
            className={`pill ${invert ? "!bg-white/10 !text-white !border-white/15" : ""}`}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: "var(--brand-orange)" }}
            />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={`text-display text-4xl md:text-6xl mt-5 ${
            invert ? "text-[var(--cream)]" : "text-foreground"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.1}>
          <p
            className={`mt-5 text-lg leading-relaxed ${
              invert ? "text-white/70" : "text-muted-foreground"
            }`}
          >
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
