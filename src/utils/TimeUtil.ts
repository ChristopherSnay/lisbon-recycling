export function convertMsToDays(input: number): number {
  return Math.ceil(input / 1000 / 60 / 60 / 24);
}
