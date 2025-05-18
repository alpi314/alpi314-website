import Image from 'next/image';

export default function ProfilePhoto() {
  return (
    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-indigo-400 flex items-center justify-center bg-white shadow-lg">
      <Image src="/main/profile.png" alt="Profile Photo" width={128} height={128} />
    </div>
  );
} 