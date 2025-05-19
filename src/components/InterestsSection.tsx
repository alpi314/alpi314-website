"use client";

import { Interest } from '@/types/interests';
import { useState } from 'react';
import interests from '../data/source.json';
import InterestBox from './InterestBox';

export default function InterestsSection() {
  const [selectedType, setSelectedType] = useState<string>('All');
  
  // Get unique types from interests
  const types = ['All', ...new Set(interests.map(item => item.type))];
  
  // Filter interests based on selected type
  const filteredInterests = selectedType === 'All' 
    ? interests 
    : interests.filter(item => item.type === selectedType);

  return (
    <section className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Interests</h2>
        <select 
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="bg-neutral-800 text-neutral-200 border border-neutral-700 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          {types.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-4">
        {filteredInterests.map((item, idx) => (
          <InterestBox key={idx} {...(item as Interest)} />
        ))}
      </div>
    </section>
  );
} 