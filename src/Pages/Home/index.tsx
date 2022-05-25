import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PageTitle } from '../../Components/PageTitle';
import { Row } from '../../Components/Row';
import DataContext from '../../data/Context';
import { Center } from '../../style';

export function Home() {
  const { state } = useContext(DataContext);
  return (
    <Center>
      <PageTitle title={`Ola ${state.name}!`} />
      <Row direction="column">
        <PageTitle title="Learning React. From Basic to Avançad"></PageTitle>
        <nav>
          <Link to="/UseState">Início {'->'}</Link>
        </nav>
      </Row>
    </Center>
  );
}
