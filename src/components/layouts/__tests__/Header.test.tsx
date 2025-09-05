import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { Header } from '../Header';

describe('Header', () => {
  test('アプリケーションタイトル「Smart Compose」が表示される', () => {
    render(<Header />);
    expect(screen.getByText('Smart Compose')).toBeInTheDocument();
  });
  test('「新しい原稿を作成」ボタンが表示される', () => {
    render(<Header />);
    expect(
      screen.getByRole('button', { name: '新しい原稿を作成' })
    ).toBeInTheDocument();
  });
});
