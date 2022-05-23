import { useEffect, useRef, useState } from 'react';
import { PageTitle } from '../../Components/PageTitle';
import { Row } from '../../Components/Row';
import { Center } from '../../style';

export function UseRef() {
  const [value, setValue] = useState('0');
  const appRef = useRef(0);

  useEffect(() => {
    appRef.current = appRef.current + 1;
  });

  return (
    <Center>
      <PageTitle
        title="Hook useRef()"
        subtititle="Retorna um objeto mutável com a propriedade .current"
      />

      <Row align="center" direction="column">
        <p>
          {value} [{appRef.current}]
        </p>
        <input
          onChange={(event) => setValue(event.target.value)}
          defaultValue="0"
        />
      </Row>
      <hr />
    </Center>
  );
}
