import AboutSection from "@/components/AboutSection";
import InterestsSection from "@/components/InterestsSection";
import ProfilePhoto from "@/components/ProfilePhoto";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-950 flex flex-col items-center p-0 relative overflow-x-hidden">
      {/* Cool background effect */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-900/40 via-transparent to-transparent blur-2xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-cyan-900/30 via-transparent to-transparent blur-2xl" />
      </div>
      <header className="w-[95vw] max-w-[1100px] mx-auto flex items-center gap-6 mb-10 z-10 pt-10 px-6">
        <ProfilePhoto />
        <span className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-neutral-100">Aleksander Piciga</span>
      </header>
      <main className="w-[95vw] max-w-[1100px] flex flex-col gap-4 z-10 px-6 pb-16 min-h-[70vh]">
        <AboutSection />
        <div className="w-full flex justify-center">
          <span className="text-xs text-neutral-400 italic mt-1 mb-4">The only constant is change ;)</span>
        </div>
        <InterestsSection />
      </main>
      <footer className="w-full text-center py-4 text-neutral-400 text-sm">
        © {new Date().getFullYear()} Aleksander Piciga | contact@alpi314.com
      </footer>
    </div>
  );
}
