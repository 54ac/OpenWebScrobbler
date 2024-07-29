import { cleanup, configure } from '@testing-library/react';
import { afterEach } from 'vitest';

import 'vitest-dom/extend-expect';

configure({
  testIdAttribute: 'data-cy',
});

afterEach(() => {
  cleanup();
});
