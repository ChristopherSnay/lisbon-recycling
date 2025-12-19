import { useEffect, useState } from 'react';
import type { RecyclingDay } from '../models/RecyclingDay';
import type { Street } from '../models/Street';
import { convertMsToDays } from '../utils/TimeUtil';

export default function useDayCalculator(
  street: Street | undefined,
  days: RecyclingDay[] | undefined
) {
  const [nextPickup, setNextPickup] = useState<Date | undefined>(undefined);
  const [remainingDays, setRemainingDays] = useState<number | string | undefined>(
    undefined
  );

  const _getNextRecyclingDay = (street: Street, days: RecyclingDay[]): RecyclingDay => {
    return days.filter(
      (x) => x.date && street.zone === x.zone && new Date(x.date) >= new Date()
    )[0];
  };

  const _getRemainingDays = (nextDate: Date): string => {
    const nowMs = new Date().getTime();
    const diffMs = nextDate.getTime() - nowMs;
    const diffDays = convertMsToDays(diffMs);

    if (diffDays === 14) {
      return '0';
    } else {
      return diffDays.toString();
    }
  };

  // calculates remaining days
  useEffect(() => {
    if (!street || !days || !nextPickup) {
      setRemainingDays(undefined);
      return;
    }

    const result = parseInt(_getRemainingDays(nextPickup), 10);

    if (result == 0) {
      setRemainingDays('Today');
    } else if (result == 1) {
      setRemainingDays('Tomorrow');
    } else {
      setRemainingDays(result);
    }
  }, [street, days, nextPickup]);

  // calculates next pickup date
  useEffect(() => {
    if (!street || !days) {
      setNextPickup(undefined);
      return;
    }

    const result = _getNextRecyclingDay(street, days);

    if (result && result.date) {
      setNextPickup(new Date(result.date));
    }
  }, [street, days]);

  return {
    nextPickup,
    remainingDays
  };
}
