import { useContext } from 'react';

import { PageTitle } from '../../Components/PageTitle';
import { Row } from '../../Components/Row';
import DataContext from '../../data/Context';
import { Center } from '../../style';

interface PropContext {
  state: {
    name: string;
  };
  setState: (value: any) => void;
}
export function UseContext() {
  const { state, setState } = useContext<PropContext>(DataContext);

  return (
    <Center>
      <PageTitle title="Hook useContext" subtititle="" />

      <Row align="center" direction="column" style={{ paddingBottom: 10 }}>
        <PageTitle title={String(state.name)} />
        <input
          type="text"
          onChange={(e) => setState({ ...state, name: e.target.value })}
          defaultValue={state.name}
        />
      </Row>
      <hr />
    </Center>
  );
}
