'use client';

import { Button } from '@/components/ui/button';
import { CheckSquare } from 'lucide-react';
import type { FilterOption } from '@/lib/types';

interface FilterButtonsProps {
  selectedFilters: FilterOption[];
  onChange: (filters: FilterOption[]) => void;
}

export default function FilterButtons({ selectedFilters, onChange }: FilterButtonsProps) {
  const toggleFilter = (filter: FilterOption) => {
    onChange(
      selectedFilters.includes(filter)
        ? selectedFilters.filter(f => f !== filter)
        : [...selectedFilters, filter]
    );
  };

  const filters: { value: FilterOption; label: string }[] = [
    { value: 'numbers', label: 'Numbers' },
    { value: 'alphabets', label: 'Alphabets' },
    { value: 'highest_alphabet', label: 'Highest Alphabet' }
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {filters.map(({ value, label }) => (
        <Button
          key={value}
          variant={selectedFilters.includes(value) ? "default" : "outline"}
          onClick={() => toggleFilter(value)}
          className="flex items-center gap-2 transition-all duration-200"
        >
          <CheckSquare 
            className={`h-4 w-4 transition-opacity duration-200 
              ${selectedFilters.includes(value) ? 'opacity-100' : 'opacity-50'}`} 
          />
          {label}
        </Button>
      ))}
    </div>
  );
}