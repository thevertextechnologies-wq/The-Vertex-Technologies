import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface PageBannerProps {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  image: string;
  align?: "left" | "center";
  dark?: boolean;
}

export default function PageBanner({
  eyebrow,
  title,
  intro,
  image,
  align = "left",
  dark = true,
}: PageBannerProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[340px] md:h-[420px] lg:h-[480px] w-full">
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        {dark && (
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(20,20,20,0.55) 0%, rgba(20,20,20,0.35) 50%, rgba(20,20,20,0.75) 100%)",
            }}
          />
        )}
        <div className="absolute inset-0 flex items-end">
          <div className="container-x w-full pb-10 md:pb-14 lg:pb-16">
            <div
              className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
            >
              {eyebrow && (
                <Reveal>
                  <p
                    className={`text-[11px] md:text-xs uppercase tracking-[0.22em] mb-4 ${
                      dark ? "text-white/80" : "text-muted-foreground"
                    }`}
                  >
                    {eyebrow}
                  </p>
                </Reveal>
              )}
              <Reveal delay={0.1}>
                <h1
                  className={`font-display font-extrabold text-balance leading-[1.05] tracking-tight ${
                    dark ? "text-white" : "text-foreground"
                  }`}
                  style={{ fontSize: "clamp(2rem, 4.6vw, 4.5rem)" }}
                >
                  {title}
                </h1>
              </Reveal>
              {intro && (
                <Reveal delay={0.2}>
                  <p
                    className={`mt-5 text-base md:text-lg leading-relaxed max-w-2xl ${
                      align === "center" ? "mx-auto" : ""
                    } ${dark ? "text-white/85" : "text-muted-foreground"}`}
                  >
                    {intro}
                  </p>
                </Reveal>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
