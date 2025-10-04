import { useEffect, useState } from 'react';
import type { RecyclingDay } from '../models/RecyclingDay';
export interface Day {
  date: string;
  zone: string;
}

const base = import.meta.env.BASE_URL?.replace(/\/$/, '') || '';

export default function useDays() {
  const [days, setDays] = useState<RecyclingDay[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${base}/days.json`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load days.json');
        return res.json();
      })
      .then((data) => {
        setDays(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { days, loading, error };
}
