interface TitleProp {
  title: string;
}
export function Title({ title }: TitleProp) {
  return <div className="text-2xl px-2 py-4">{title}</div>;
}
