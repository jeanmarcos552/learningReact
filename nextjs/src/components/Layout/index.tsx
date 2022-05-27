interface LayoutProp {
  title: string;
  children: React.ReactNode;
}
export function Layout({ title, children }: LayoutProp) {
  return (
    <>
      <div className="flex flex-col w-2/3 justify-center bg-white rounded text-gray-500">
        <div className="text-2xl px-2 py-4">{title}</div>
        <hr className="w-full border-b-4 border-purple-500" />
        <div className="px-2 py-4">{children}</div>
      </div>
    </>
  );
}
