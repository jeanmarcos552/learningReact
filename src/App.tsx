import { Link } from 'react-router-dom';

import { ContainerDefault, Sidebar, SpanName } from './style';
import './style.css';
import DataContext, { data } from './data/Context';
import { useState } from 'react';

import { Menu } from './Components/Menu';
import { Content } from './Components/Content';

function App() {
  const [state, setState] = useState(data);

  return (
    <DataContext.Provider value={{ state, setState }}>
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
    </DataContext.Provider>
  );
}

export default App;
