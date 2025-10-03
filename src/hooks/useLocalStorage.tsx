import { useCallback, useState } from 'react';

export default function useLocalStorage() {
  const [error, setError] = useState<Error | null>(null);

  const getItem = useCallback((key: string): string | null => {
    try {
      return localStorage.getItem(key);
    } catch (err) {
      setError(err as Error);
      return null;
    }
  }, []);

  const setItem = useCallback((key: string, value: string) => {
    try {
      localStorage.setItem(key, value);
    } catch (err) {
      setError(err as Error);
    }
  }, []);

  const removeItem = useCallback((key: string) => {
    try {
      localStorage.removeItem(key);
    } catch (err) {
      setError(err as Error);
    }
  }, []);

  return { getItem, setItem, removeItem, error };
}
