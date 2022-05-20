import { Link, Route, Routes } from 'react-router-dom';

import { Home } from './Pages/Home';
import { UseEffect } from './Pages/Hooks/UseEffect';
import { UseState } from './Pages/Hooks/UseState';
import { ContainerDefault, Sidebar, SpanName } from './style';
import './style.css';

function App() {
  return (
    <ContainerDefault>
      <Sidebar>
        <Link to="/">
          <SpanName>
            {/* <img src="../img/logo.png" alt="" width="100%" /> */}
            <span>{'<Jean />'} </span>
          </SpanName>
        </Link>

        <ul>
          <li></li>
          <li>
            <Link to="useState">UseState</Link>
          </li>
          <li>
            <Link to="useEffect">UseEffect</Link>
          </li>
        </ul>
      </Sidebar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/UseState" element={<UseState />} />
        <Route path="/UseEffect" element={<UseEffect />} />
      </Routes>
    </ContainerDefault>
  );
}

export default App;
