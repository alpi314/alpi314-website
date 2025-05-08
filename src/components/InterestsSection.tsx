import interests from '../data/interests.json';
import InterestBox from './InterestBox';

export default function InterestsSection() {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Interests</h2>
      <div className="flex flex-col gap-4">
        {interests.map((item, idx) => (
          <InterestBox key={idx} {...item} />
        ))}
      </div>
    </section>
  );
} 