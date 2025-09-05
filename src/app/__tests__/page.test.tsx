import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

import Page from '../page';

test('Pageコンポーネントが正しくレンダリングされる', () => {
  render(<Page />);

  expect(screen.getByText('Smart Compose')).toBeInTheDocument();
});
