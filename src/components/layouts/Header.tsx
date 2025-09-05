export const Header = () => {
  return (
    <header className="flex justify-between border-b border-gray-200 px-9 py-4 shadow-sm">
      <h1 className="text-lg">Smart Compose</h1>
      <button className="bg-primary cursor-pointer rounded-md px-2 py-1 text-sm text-white hover:bg-primary/80">
        新しい原稿を作成
      </button>
    </header>
  );
};
