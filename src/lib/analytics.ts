// src/lib/analytics.ts

/**
 * A centralized function for tracking GA4 events.
 * It checks for the existence of window.gtag to avoid errors in environments
 * where Google Analytics might be blocked or not loaded.
 *
 * @param eventName The name of the event to track (e.g., 'cta_click').
 * @param params An object of key-value pairs providing more details about the event.
 */
export const trackEvent = (
  eventName: string,
  params: Record<string, string | number | undefined>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
    console.log(`[Analytics] Event: ${eventName}`, params);
  } else {
    console.log(
      `[Analytics] Event (not sent): ${eventName}`,
      params
    );
  }
};
