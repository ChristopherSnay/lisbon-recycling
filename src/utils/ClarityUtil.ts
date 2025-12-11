export function trackClarityEvent(name: string, data: object): void {
  try {
    if (typeof window.clarity === 'function') {
      window.clarity('event', name, data);
    } else {
      console.warn('Microsoft Clarity is not available.');
    }
  } catch (error) {
    console.error('Error tracking Clarity event:', error);
  }
}

export function setClarityProperty(key: string, value: string): void {
  try {
    if (typeof window.clarity === 'function') {
      window.clarity('set', key, value);
    } else {
      console.warn('Microsoft Clarity is not available.');
    }
  } catch (error) {
    console.error('Error setting Clarity property:', error);
  }
}
