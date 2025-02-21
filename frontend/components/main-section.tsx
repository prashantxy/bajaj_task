'use client';

import { useState } from 'react';
import DataInput from './data-input';
import FilterSection from './filter';
import type { ProcessDataResponse } from '@/lib/types';

export default function MainSection() {
  const [response, setResponse] = useState<ProcessDataResponse | null>(null);

  return (
    <div className="space-y-6">
      <DataInput onDataProcessed={setResponse} />
      {response && <FilterSection response={response} />}
    </div>
  );
}