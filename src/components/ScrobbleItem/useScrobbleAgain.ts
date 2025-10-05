import ReactGA from 'react-ga-neo';
import { useDispatch } from 'react-redux';

import { cleanTitleWithPattern } from 'domains/scrobbleAlbum/CleanupContext';
import { useCaptcha } from 'hooks/useCaptcha';
import { enqueueScrobble } from 'store/actions/scrobbleActions';

import type { Scrobble } from 'utils/types/scrobble';

export function useScrobbleAgain(
  scrobble: Scrobble,
  useOriginalTimestamp: boolean,
  analyticsEvent = 'Scrobble again',
  cleanupPattern?: RegExp
) {
  const dispatch = useDispatch();
  const { getCaptchaToken } = useCaptcha();

  return () => {
    ReactGA.event({
      category: 'Interactions',
      action: analyticsEvent,
    });
    enqueueScrobble(
      dispatch,
      getCaptchaToken
    )([
      {
        ...scrobble,
        title: cleanTitleWithPattern(scrobble.title, cleanupPattern),
        timestamp: useOriginalTimestamp ? scrobble.timestamp : new Date(),
      },
    ]);
  };
}
