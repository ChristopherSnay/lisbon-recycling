import { useEffect, useState } from 'react';
import type { Street } from '../models/Street';

const base = import.meta.env.BASE_URL?.replace(/\/$/, '') || '';

export default function useStreets() {
  const [streets, setStreets] = useState<Street[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${base}/streets.json`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load streets.json');
        return res.json();
      })
      .then((data) => {
        setStreets(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { streets, loading, error };
}
