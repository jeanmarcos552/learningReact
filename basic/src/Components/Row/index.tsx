import { Container } from './style';

interface PropRow {
  children: React.ReactNode;
  direction: 'row' | 'column' | 'column-reverse' | 'inherit' | 'row-reverse';
  align?: 'center' | 'flex-start' | 'flex-end' | 'space-between';
  style?: React.CSSProperties;
}
export function Row({ ...prop }: PropRow) {
  return <Container {...prop} />;
}
