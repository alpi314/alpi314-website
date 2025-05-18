export default function AboutSection() {
  return (
    <section className="border border-neutral-800 rounded-xl p-4 my-6 bg-neutral-900/80 shadow-lg">
      <div className="text-base text-neutral-200">
        Hi, I&apos;m a data science student interested in computer vision, AI, and coding. Welcome to my personal blog!<br /><br />
        My journey in technology began with a excuting challanges in competitive programming and fascination for how machines perceive the world. Over the years, I&apos;ve explored various topics in AI and computer science, and always enjoy learning new things and brain storming novel ideas. I enjoy building projects that combine technical rigor with creativity.<br /><br />
        On this site, you&apos;ll find my latest projects, interests, and things I&apos;m working on. If you&apos;re passionate about data, creativity, or just want to connect, feel free to reach out!
      </div>
      <div className="flex justify-center gap-4 mt-6">
        <a
          href="/main/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 rounded-lg bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-500 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          aria-label="View CV (opens in new tab)"
        >
          View CV
        </a>
        <a
          href="mailto:contact@alpi314.com"
          className="inline-block px-6 py-2 rounded-lg bg-neutral-800 text-indigo-200 font-semibold shadow hover:bg-neutral-700 hover:text-white hover:scale-105 transition-all duration-200 border border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          aria-label="Contact Me via Email"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
} 