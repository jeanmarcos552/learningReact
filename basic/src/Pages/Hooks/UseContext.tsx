import { useContext } from 'react';

import { PageTitle } from '../../Components/PageTitle';
import { Row } from '../../Components/Row';
import DataContext from '../../data/Context';
import { Center } from '../../style';

export function UseContext() {
  const { name, updateName } = useContext(DataContext);

  return (
    <Center>
      <PageTitle title="Hook useContext" subtititle="" />

      <Row align="center" direction="column" style={{ paddingBottom: 10 }}>
        <PageTitle title={String(name)} />
        <input
          type="text"
          onChange={(e) => updateName(e.target.value)}
          defaultValue={name}
        />
      </Row>
      <hr />
    </Center>
  );
}
