import { useCallback, useState } from 'react';

import { PageTitle } from '../../Components/PageTitle';
import { Center } from '../../style';
import UseCallbackButtons from './UseCallbackButtons';

export function UseCallback() {
  const [number, setNumber] = useState(0);

  const count = useCallback((delta: number) => {
    setNumber((state) => state + delta);
  }, []);

  return (
    <Center>
      <PageTitle
        title="Hook UseEffect"
        subtititle="Permite execurar efeitos colaterais em compnentes"
      />
      <PageTitle title={String(number)} />

      <UseCallbackButtons count={count} />
    </Center>
  );
}
