import { saveToLocalStorage } from 'localstorage';

import { openscrobblerAPI } from '../apiClient';
import { callbackTransformer } from '../transformers/callback.transformer';

export function validateLastfmToken(lastfmToken: string, turnstileToken: string) {
  const params = new URLSearchParams();
  params.append('token', lastfmToken);
  params.append('cfchallenge', turnstileToken);

  return openscrobblerAPI.post('/callback.php', params).then(({ data: rawData }) => {
    const data = callbackTransformer(rawData);

    // JWT
    if (data.success && data?.token) {
      saveToLocalStorage('token', data.token);
    }

    return data;
  });
}
