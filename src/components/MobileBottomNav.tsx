import { Link, useLocation } from "@tanstack/react-router";
import { Home, Layers, Briefcase, Phone, BookOpen } from "lucide-react";

const items = [
  { to: "/", label: "Home", icon: Home },
  { to: "/services", label: "Services", icon: Layers },
  { to: "/case-studies", label: "Work", icon: Briefcase },
  { to: "/resources", label: "Blog", icon: BookOpen },
  { to: "/contact", label: "Contact", icon: Phone },
] as const;

export default function MobileBottomNav() {
  const location = useLocation();
  return (
    <nav
      className="lg:hidden fixed bottom-0 inset-x-0 z-50 bg-background/95 backdrop-blur-md border-t border-border"
      style={{ paddingBottom: "max(env(safe-area-inset-bottom), 0px)" }}
      aria-label="Mobile navigation"
    >
      <ul className="grid grid-cols-5">
        {items.map((it) => {
          const active = location.pathname === it.to;
          const Icon = it.icon;
          return (
            <li key={it.to}>
              <Link
                to={it.to}
                className="flex flex-col items-center justify-center gap-1 py-2.5 transition-colors"
                style={{ color: active ? "var(--brand-red)" : "var(--foreground)" }}
              >
                <Icon className="h-5 w-5" strokeWidth={active ? 2.4 : 1.8} />
                <span className="text-[10px] font-semibold tracking-wide uppercase">
                  {it.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
