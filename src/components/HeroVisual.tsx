import { motion } from "framer-motion";
import svcAi from "@/assets/svc-ai.jpg";
import svcMarketing from "@/assets/svc-marketing.jpg";
import svcGrowth from "@/assets/svc-growth.jpg";
import svcConsulting from "@/assets/svc-consulting.jpg";
import svcAutomation from "@/assets/svc-automation.jpg";
import svcChatbot from "@/assets/svc-chatbot.jpg";

type Card = { src: string; alt: string; label: string };

const colA: Card[] = [
  { src: svcAi, alt: "AI agents", label: "AI Agents" },
  { src: svcMarketing, alt: "Digital Marketing", label: "Digital Marketing" },
  { src: svcGrowth, alt: "Growth Systems", label: "Growth Systems" },
];

const colB: Card[] = [
  { src: svcAutomation, alt: "Automation", label: "Automation" },
  { src: svcConsulting, alt: "Consulting", label: "Consulting" },
  { src: svcChatbot, alt: "Chatbots", label: "Chatbots" },
];

function ScrollColumn({
  cards,
  direction,
  duration = 26,
}: {
  cards: Card[];
  direction: "up" | "down";
  duration?: number;
}) {
  // duplicate cards so the loop is seamless
  const doubled = [...cards, ...cards];

  // Translate from 0 to -50% (up) or -50% to 0 (down)
  const yKeyframes = direction === "up" ? ["0%", "-50%"] : ["-50%", "0%"];

  return (
    <div className="relative overflow-hidden h-[520px] md:h-[600px] lg:h-[640px] rounded-[28px]">
      {/* fade masks */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 z-10 bg-gradient-to-b from-background to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 z-10 bg-gradient-to-t from-background to-transparent" />

      <motion.div
        className="flex flex-col gap-4"
        animate={{ y: yKeyframes }}
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {doubled.map((c, i) => (
          <figure
            key={`${c.label}-${i}`}
            className="relative overflow-hidden rounded-[24px] aspect-[3/4] shrink-0 shadow-[0_20px_50px_-25px_rgba(0,0,0,0.35)] bg-muted"
          >
            <img
              src={c.src}
              alt={c.alt}
              loading={i < 2 ? "eager" : "lazy"}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <figcaption className="absolute inset-x-0 top-0 p-4 md:p-5">
              <span
                className="font-display font-extrabold text-white text-xl md:text-2xl tracking-tight"
                style={{ textShadow: "0 2px 12px rgba(0,0,0,0.55)" }}
              >
                {c.label}
              </span>
            </figcaption>
          </figure>
        ))}
      </motion.div>
    </div>
  );
}

export default function HeroVisual() {
  return (
    <div className="grid grid-cols-2 gap-3 md:gap-5 select-none">
      <ScrollColumn cards={colA} direction="up" duration={28} />
      <ScrollColumn cards={colB} direction="down" duration={32} />
    </div>
  );
}
