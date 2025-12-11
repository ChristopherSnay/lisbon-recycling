declare global {
  interface Window {
    clarity?: (action: string, name: string, data: object | string) => void;
  }
}
export {};
