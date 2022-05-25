import { Link } from 'react-router-dom';

import { ContainerDefault, Sidebar, SpanName } from './style';
import './style.css';

import { Menu } from './Components/Menu';
import { Content } from './Components/Content';
import Store from './data/Store';

function App() {
  return (
    <Store>
      <ContainerDefault>
        <Sidebar>
          <Link to="/">
            <SpanName>
              <span>{'<Jean />'} </span>
            </SpanName>
          </Link>

          <Menu />
        </Sidebar>

        <Content />
      </ContainerDefault>
    </Store>
  );
}

export default App;
