import { useContext } from 'react';

import { CaptchaContext } from 'components/Captcha/CaptchaContext';

export function useCaptcha() {
  const { captchaToken, setCaptchaToken } = useContext(CaptchaContext);

  const resetCaptcha = () => {
    setCaptchaToken('');
  };

  const getCaptchaToken = (): string => {
    const token = captchaToken;
    resetCaptcha();

    return token;
  };

  return {
    resetCaptcha,
    getCaptchaToken,
  };
}
