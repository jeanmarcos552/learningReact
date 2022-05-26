import { useEffect, useState } from 'react';

import { PageTitle } from '../../Components/PageTitle';
import { Row } from '../../Components/Row';
import { Center } from '../../style';

function calcFatorial(num: number): any {
  if (!num) return 1;
  if (num < 0) return -1;
  if (num === 0) return 1;
  return calcFatorial(num - 1) * num;
}

function checkIsParOrImpar(num: number) {
  if (num < 0) return '';
  if (num % 2 === 0) {
    return `O número ${num} é par`;
  }

  return `O número ${num} é impar`;
}
export function UseEffect() {
  const [number, setNumber] = useState(1);
  const [fatorial, setFatorial] = useState(1);

  useEffect(() => {
    setFatorial(calcFatorial(number));
  }, [number]);

  return (
    <Center>
      <PageTitle
        title="Hook UseEffect"
        subtititle="Permite execurar efeitos colaterais em compnentes"
      />
      <Row align="flex-start" direction="column" style={{ paddingBottom: 10 }}>
        <PageTitle title="Exercício #1" />
        {fatorial}
        <input
          type="number"
          onChange={(event) => setNumber(parseInt(event.target.value))}
          defaultValue={number}
        />
      </Row>
      <Row align="flex-start" direction="column" style={{ paddingBottom: 10 }}>
        <PageTitle title="Exercício #2" />
        {checkIsParOrImpar(number)}
      </Row>
    </Center>
  );
}
