import { PageTitle } from '../../Components/PageTitle';
import { Row } from '../../Components/Row';

import { Center } from '../../style';

export function CustomHooks() {
  return (
    <Center>
      <PageTitle title="Hook CustomHooks" subtititle="" />

      <Row align="center" direction="column" style={{ paddingBottom: 10 }}>
        <h2>Em dev..</h2>
      </Row>
      <hr />
    </Center>
  );
}
