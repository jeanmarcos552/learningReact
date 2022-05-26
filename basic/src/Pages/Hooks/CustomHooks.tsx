import { PageTitle } from '../../Components/PageTitle';
import { Row } from '../../Components/Row';
import { useFetch } from '../../hooks/useFetch';

import { Center } from '../../style';

export function CustomHooks() {
  const response: any = useFetch('https://api.github.com/users/jeanmarcos552');

  return (
    <Center>
      <PageTitle title="Hook CustomHooks" subtititle="" />

      {!response.loading && (
        <Row align="center" direction="column" style={{ paddingBottom: 10 }}>
          <h2> {response.data.bio} </h2>
          <img src={response.data.avatar_url} alt="" />
        </Row>
      )}
      <hr />
    </Center>
  );
}
