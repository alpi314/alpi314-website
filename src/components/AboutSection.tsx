export default function AboutSection() {
  return (
    <section className="border border-neutral-800 rounded-xl p-4 my-6 bg-neutral-900/80 shadow-lg">
      <div className="text-base text-neutral-200">
        Hi, I'm a data science student interested in computer vision, AI, and creative coding. Welcome to my personal blog!<br /><br />
        My journey in technology began with a fascination for how machines perceive the world. Over the years, I've explored deep learning, image processing, and the creative intersection of art and algorithms. I enjoy building projects that combine technical rigor with visual storytelling, whether it's through generative art, interactive dashboards, or real-time computer vision applications.<br /><br />
        On this site, you'll find my latest projects, tutorials, and thoughts on the future of AI. I believe in open science, sharing knowledge, and the power of curiosity-driven learning. If you're passionate about data, creativity, or just want to connect, feel free to reach out!
      </div>
      <div className="flex justify-center gap-4 mt-6">
        <a
          href="/Resume_Aleksander_Piciga.pdf"
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