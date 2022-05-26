import { H2, H6, Header } from './style';

interface PropPageTitle {
  title: string;
  subtititle?: string;
}
export function PageTitle({ title, subtititle }: PropPageTitle) {
  return (
    <>
      <Header>
        <H2>{title}</H2>
        {subtititle && <H6>{subtititle}</H6>}
      </Header>
    </>
  );
}
