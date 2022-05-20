import { Link } from 'react-router-dom';
import { PageTitle } from '../../Components/PageTitle';
import { Row } from '../../Components/Row';
import { Center } from '../../style';

export function Home() {
  return (
    <Center>
      <Row direction="column">
        <PageTitle title="Learning React. From Basic to Avançad"></PageTitle>
        <nav>
          <Link to="/UseState">UseState</Link>
        </nav>
      </Row>
    </Center>
  );
}
