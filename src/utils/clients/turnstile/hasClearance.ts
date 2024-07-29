import { getTurnstileSiteKey } from 'Constants';

export function hasClearance() {
  const turnstileEnabled = !!getTurnstileSiteKey();

  if (turnstileEnabled) {
  }

  return true;
}
