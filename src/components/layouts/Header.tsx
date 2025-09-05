export const Header = () => {
  return (
    <header className="flex justify-between border-b border-gray-200 px-9 py-4 shadow-sm">
      <h1 className="text-lg">Smart Composer</h1>
      <button className="bg-primary rounded-md py-1 px-2 text-sm text-white">
        新しい原稿を作成
      </button>
    </header>
  );
};
