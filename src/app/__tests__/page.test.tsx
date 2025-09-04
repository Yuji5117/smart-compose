import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import Page from '../page';

test('Pageコンポーネントが正しくレンダリングされる', () => {
  render(<Page />);

  // Next.jsロゴが表示されることを確認
  expect(screen.getByAltText('Next.js logo')).toBeInTheDocument();

  // 主要なテキストが表示されることを確認（部分一致で検索）
  expect(screen.getByText(/Get started by editing/)).toBeInTheDocument();
  expect(screen.getByText('src/app/page.tsx')).toBeInTheDocument();

  // リンクが正しく設定されていることを確認
  expect(screen.getByText('Deploy now')).toBeInTheDocument();
  expect(screen.getByText('Read our docs')).toBeInTheDocument();

  // その他の要素も確認
  expect(screen.getByText('Learn')).toBeInTheDocument();
  expect(screen.getByText('Examples')).toBeInTheDocument();
});