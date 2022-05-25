import { useContext, useState } from 'react';
import { PageButton } from '../../Components/Button';
import { PageTitle } from '../../Components/PageTitle';
import { Row } from '../../Components/Row';
import DataContext from '../../data/Context';
import { Center } from '../../style';

export function UseState() {
  const [count, setCount] = useState(0);
  const { state } = useContext(DataContext);

  return (
    <Center>
      <PageTitle
        title="Hook useState"
        subtititle="Permite adicionar o state do React a um componente de função"
      />
      <Row align="space-between" direction="row">
        <div>{String(count)}</div>
        <div>{state.name}</div>
      </Row>
      <Row align="center" direction="row" style={{ paddingBottom: 10 }}>
        <PageButton onClick={() => setCount(count - 1)}>Subtrair -1</PageButton>
        <PageButton onClick={() => setCount(count + 1)}>Somar +1</PageButton>
        <PageButton onClick={() => setCount(count + 10)}>Somar +10</PageButton>
      </Row>
      <hr />
    </Center>
  );
}
