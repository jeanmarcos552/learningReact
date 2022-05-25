import { useReducer } from 'react';
import { Button } from '../../Components/Button/style';
import { PageTitle } from '../../Components/PageTitle';
import { Row } from '../../Components/Row';

import { Center } from '../../style';

const initialState = {
  name: 'Jean Marcos',
  age: null,
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'UPDATE_NAME':
      return { ...state, name: action.payload };
    case 'UPDATE_AGE':
      return { ...state, age: state.age + action.payload };
    default:
      return state;
  }
}
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
          <Button onClick={() => dispatch({ type: 'UPDATE_AGE', payload: 1 })}>
            Change Age (+1)
          </Button>
        </div>
      </Row>
      <hr />
    </Center>
  );
}
