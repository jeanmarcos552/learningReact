import { Link, Route, Routes } from 'react-router-dom';

import { Home } from './Pages/Home';
import { UseEffect } from './Pages/Hooks/UseEffect';
import { UseMemo } from './Pages/Hooks/UseMemo';
import { UseRef } from './Pages/Hooks/UseRef';
import { UseState } from './Pages/Hooks/UseState';
import { ContainerDefault, Sidebar, SpanName } from './style';
import './style.css';

function App() {
  return (
    <ContainerDefault>
      <Sidebar>
        <Link to="/">
          <SpanName>
            <span>{'<Jean />'} </span>
          </SpanName>
        </Link>

        <ul>
          <li>
            <Link to="useState">UseState</Link>
          </li>
          <li>
            <Link to="useEffect">UseEffect</Link>
          </li>
          <li>
            <Link to="useRef">useRef()</Link>
          </li>
          <li>
            <Link to="useMemo">UseMemo()</Link>
          </li>
        </ul>
      </Sidebar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/UseState" element={<UseState />} />
        <Route path="/UseEffect" element={<UseEffect />} />
        <Route path="/useRef" element={<UseRef />} />
        <Route path="/useMemo" element={<UseMemo />} />
      </Routes>
    </ContainerDefault>
  );
}

export default App;
