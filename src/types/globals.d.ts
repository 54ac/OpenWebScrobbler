export {};

declare global {
  interface Window {
    // Present during Cypress E2E runs
    Cypress?: unknown;
    // Exposed in tests to stub turnstile key (sorry)
    getTurnstileSiteKey?: () => string | null;
  }
}
