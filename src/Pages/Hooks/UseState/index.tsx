import { useState } from 'react';
import { PageButton } from '../../../Components/Button';

import { PageTitle } from '../../../Components/PageTitle';
import { Row } from '../../../Components/Row';
import { Center } from '../../../style';

export function UseState() {
  const [count, setCount] = useState(0);

  return (
    <Center>
      <PageTitle title="Hook useState" subtititle="" />
      {String(count)}
      <Row align="center" direction="row" style={{ paddingBottom: 10 }}>
        <PageButton onClick={() => setCount(count - 1)}>Subtrair -1</PageButton>
        <PageButton onClick={() => setCount(count + 1)}>Somar +1</PageButton>
        <PageButton onClick={() => setCount(count + 10)}>Somar +10</PageButton>
      </Row>
      <hr />
    </Center>
  );
}
