import { prepareScrobbles } from 'store/transformers/scrobbleTransformer';

import { openscrobblerAPI } from '../apiClient';

import type { Scrobble } from 'utils/types/scrobble';

export function scrobble(scrobbles: Scrobble[], scrobbleUUID: string, validationToken: string) {
  return openscrobblerAPI.post(
    '/scrobble.php',
    { ...prepareScrobbles(scrobbles), validationToken },
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        scrobbleUUID,
      },
    }
  );
}
