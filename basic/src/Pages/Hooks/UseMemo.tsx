import { useMemo, useState } from 'react';
import { PageTitle } from '../../Components/PageTitle';
import { Row } from '../../Components/Row';
import { Center } from '../../style';

function sum(a: number, b: number) {
  const final = Date.now() + 1000;
  while (Date.now() < final) {}
  return a + b;
}
export function UseMemo() {
  const [input1, setInput1] = useState<number>();
  const [input2, setInput2] = useState<number>();
  const [, setInput3] = useState<number>();

  const result = useMemo(() => {
    if (input1 && input2) {
      return sum(input1, input2);
    }
  }, [input1, input2]);

  return (
    <Center>
      <PageTitle
        title="Hook UseMemo()"
        subtititle="Retorna um valor memoizado"
      />

      <div>{result}</div>
      <Row align="center" direction="column">
        <input
          type="number"
          required
          minLength={4}
          onChange={(event) => setInput1(parseFloat(event.target.value))}
        />
        <hr />
        <input
          required
          minLength={4}
          type="number"
          onChange={(event) => setInput2(parseFloat(event.target.value))}
        />
        <hr />
        <input
          required
          minLength={4}
          type="number"
          onChange={(event) => setInput3(parseFloat(event.target.value))}
        />
      </Row>
      <hr />
    </Center>
  );
}
