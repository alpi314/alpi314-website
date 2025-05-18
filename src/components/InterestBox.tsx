import Image from 'next/image';
import Link from 'next/link';

interface InterestBoxProps {
  type: string;
  title: string;
  photo: string;
  description: string;
  href?: string;
}

export default function InterestBox({ type, title, photo, description, href }: InterestBoxProps) {
  const cardContent = (
    <div className={`border border-neutral-800 rounded-xl p-4 flex flex-col md:flex-row gap-4 bg-neutral-900/80 shadow-lg transition-shadow items-center ${href ? 'hover:shadow-2xl hover:ring-2 hover:ring-indigo-400 cursor-pointer' : ''}`}>
      <div className="flex-shrink-0">
        <Image src={photo} alt={title} width={80} height={80} className="rounded-lg" />
      </div>
      <div>
        <div className="text-xs text-neutral-400">{type}</div>
        <div className="font-bold text-lg text-indigo-300">{title}</div>
        <div className="text-neutral-300">{description}</div>
      </div>
    </div>
  );

  if (href) {
    const isExternal = href.startsWith('http');
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="block">
          {cardContent}
        </a>
      );
    } else {
      return (
        <Link href={href} className="block">
          {cardContent}
        </Link>
      );
    }
  }
  return cardContent;
} 