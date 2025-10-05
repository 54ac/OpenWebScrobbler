import { createContext } from 'react';

export const CaptchaContext = createContext({
  captchaToken: '',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setCaptchaToken: (token: string) => {},
});
