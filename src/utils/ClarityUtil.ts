export function trackClarityEvent(action: string, key: string, value: string) {
  try {
    if (window.clarity) {
      window.clarity(action, key, value);
    }
  } catch (error) {
    console.error('Error tracking Clarity event:', error);
  }
}
