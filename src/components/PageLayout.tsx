import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingContactButtons from "./FloatingContactButtons";
import MobileBottomNav from "./MobileBottomNav";

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pb-16 lg:pb-0">{children}</main>
      <Footer />
      <FloatingContactButtons />
      <MobileBottomNav />
    </div>
  );
}
