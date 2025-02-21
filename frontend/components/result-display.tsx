'use client';

import { memo } from 'react';
import type { ProcessDataResponse, FilterOption } from '@/lib/types';

interface ResultsDisplayProps {
  response: ProcessDataResponse;
  selectedFilters: FilterOption[];
}

const ResultItem = memo(({ title, items, bgColor, textColor }: {
  title: string;
  items: string[];
  bgColor: string;
  textColor: string;
}) => (
  <div className={`p-4 ${bgColor} rounded-lg transition-all duration-300 animate-slideIn`}>
    <h3 className={`font-semibold ${textColor} mb-2`}>{title}</h3>
    <div className="flex flex-wrap gap-2">
      {items.map((item, idx) => (
        <span 
          key={idx} 
          className={`px-3 py-1 ${bgColor.replace('50', '100')} ${textColor} 
                     rounded-full transition-all duration-200 hover:scale-105`}
        >
          {item}
        </span>
      ))}
    </div>
  </div>
));

ResultItem.displayName = 'ResultItem';

export default function ResultsDisplay({ response, selectedFilters }: ResultsDisplayProps) {
  const items = [
    {
      filter: 'numbers',
      title: 'Numbers',
      items: response.numbers,
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-900'
    },
    {
      filter: 'alphabets',
      title: 'Alphabets',
      items: response.alphabets,
      bgColor: 'bg-green-50',
      textColor: 'text-green-900'
    },
    {
      filter: 'highest_alphabet',
      title: 'Highest Alphabet',
      items: response.highest_alphabet,
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-900'
    }
  ];

  return (
    <div className="space-y-4">
      {items.map(({ filter, title, items, bgColor, textColor }) => (
        selectedFilters.includes(filter as FilterOption) && items.length > 0 && (
          <ResultItem
            key={filter}
            title={title}
            items={items}
            bgColor={bgColor}
            textColor={textColor}
          />
        )
      ))}
    </div>
  );
}