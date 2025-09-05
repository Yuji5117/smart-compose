import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import Page from '../page';

test('Pageコンポーネントが正しくレンダリングされる', () => {
  render(<Page />);

  expect(screen.getByText('Smart Composer')).toBeInTheDocument();
});
