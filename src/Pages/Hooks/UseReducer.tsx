import { useReducer } from 'react';
import { Button } from '../../Components/Button/style';
import { PageTitle } from '../../Components/PageTitle';
import { Row } from '../../Components/Row';
import { initialState, reducer } from '../../store';
import { updateAge } from '../../store/actions';

import { Center } from '../../style';

export function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Center>
      <PageTitle
        title="Hook useReducer"
        subtititle="Uma outra forma de ter Estado dentro de um componente"
      />

      <Row align="center" direction="column" style={{ paddingBottom: 10 }}>
        <h2>{state.name}.</h2>
        <h2>{state.age}.</h2>

        <div>
          <Button onClick={() => updateAge(dispatch, 1)}>
            Change Age (+1)
          </Button>
        </div>
      </Row>
      <hr />
    </Center>
  );
}
