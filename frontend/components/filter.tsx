'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/card';
import FilterButtons from '@/components/filter-buttons';
import ResultsDisplay from './result-display';
import type { ProcessDataResponse, FilterOption } from '@/lib/types';

interface FilterSectionProps {
  response: ProcessDataResponse;
}

export default function FilterSection({ response }: FilterSectionProps) {
  const [selectedFilters, setSelectedFilters] = useState<FilterOption[]>(['numbers', 'alphabets']);

  return (
    <Card className="transition-all duration-300 hover:shadow-lg animate-fadeIn">
      <CardHeader>
        <CardTitle>Filter Results</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <FilterButtons 
            selectedFilters={selectedFilters}
            onChange={setSelectedFilters}
          />
          <ResultsDisplay 
            response={response} 
            selectedFilters={selectedFilters} 
          />
        </div>
      </CardContent>
    </Card>
  );
}