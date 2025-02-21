'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';
import { api } from '@/lib/api';
import type { ProcessDataResponse } from '@/lib/types';

interface DataInputProps {
  onDataProcessed: (response: ProcessDataResponse) => void;
}

export default function DataInput({ onDataProcessed }: DataInputProps) {
  const [jsonInput, setJsonInput] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setError('');
      setLoading(true);
      
      const parsedInput = JSON.parse(jsonInput);
      if (!parsedInput.data || !Array.isArray(parsedInput.data)) {
        throw new Error('Input must contain a "data" array');
      }

      const result = await api.processData(parsedInput);
      onDataProcessed(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid JSON format');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <CardTitle>Input JSON Data</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="relative">
            <textarea
              value={jsonInput}
              onChange={(e) => setJsonInput(e.target.value)}
              placeholder={'Enter JSON data (e.g., {"data": ["A","1","B","2"]})'}
              className="w-full h-32 p-3 border rounded-lg font-mono text-sm resize-none 
                        focus:ring-2 focus:ring-blue-500 focus:border-transparent
                        bg-white shadow-sm transition-all duration-200"
            />
          </div>
          
          <Button 
            onClick={handleSubmit}
            disabled={loading}
            className="w-full transition-all duration-200 hover:shadow-md"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="animate-spin">⚪</span> Processing...
              </span>
            ) : (
              'Process Data'
            )}
          </Button>

          {error && (
            <Alert variant="destructive" className="animate-slideIn">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </div>
      </CardContent>
    </Card>
  );
}