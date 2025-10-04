import type { RecyclingDay } from '../models/RecyclingDay';
import type { Street } from '../models/Street';

export default function useDayCalculator() {
  const getNextRecyclingDay = (street: Street, days: RecyclingDay[]): RecyclingDay => {
    return days.filter(
      (x) => x.date && street.zone === x.zone && new Date(x.date) >= new Date()
    )[0];
  };

  const getRemainingDays = (nextDate: Date): string => {
    let diffMs = nextDate.getTime() - new Date().getTime();

    let diffDays = _convertMsToDays(diffMs);

    if (diffDays === 14) {
      return '0';
    } else {
      return diffDays.toString();
    }
  };

  const _convertMsToDays = (input: number): number => {
    return Math.ceil(input / 1000 / 60 / 60 / 24);
  };

  return {
    getNextRecyclingDay,
    getRemainingDays
  };
}
