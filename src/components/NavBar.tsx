import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="w-full flex gap-10 items-center border border-neutral-800 rounded px-8 py-5 bg-neutral-900/80 text-neutral-200 text-lg min-h-[64px]">
      <Link href="/" className="font-semibold hover:text-indigo-300 transition-colors">Main Page</Link>
      <Link href="/cv" className="hover:text-indigo-300 transition-colors">CV</Link>
      <Link href="/projects" className="hover:text-indigo-300 transition-colors">Projects</Link>
      {/* Add more subpages as needed */}
    </nav>
  );
} 