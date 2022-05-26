import React, { useEffect, useRef, useState } from 'react';
import { PageTitle } from '../../Components/PageTitle';
import { Row } from '../../Components/Row';
import { Center } from '../../style';

export function UseRef() {
  const [value, setValue] = useState('0');
  const appRef = useRef(0);

  const myInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (myInput.current) {
      myInput.current.focus();
    }
  }, []);

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
          required
          minLength={4}
          ref={myInput}
          onChange={(event) => setValue(event.target.value)}
          style={{
            border: `1px solid ${
              myInput?.current?.checkValidity() ? 'green' : 'red'
            }`,
          }}
        />
      </Row>
      <hr />
    </Center>
  );
}
