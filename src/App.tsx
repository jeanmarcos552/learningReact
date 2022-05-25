import { Link, Route, Routes } from 'react-router-dom';

import { Home } from './Pages/Home';
import { UseCallback } from './Pages/Hooks/UseCallback';
import { UseEffect } from './Pages/Hooks/UseEffect';
import { UseMemo } from './Pages/Hooks/UseMemo';
import { UseRef } from './Pages/Hooks/UseRef';
import { UseState } from './Pages/Hooks/UseState';
import { ContainerDefault, Sidebar, SpanName } from './style';
import './style.css';
import DataContext, { data } from './data/Context';
import { useState } from 'react';
import { UseContext } from './Pages/Hooks/UseContext';

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

          <ul>
            <li>
              <Link to="useState">UseState()</Link>
            </li>
            <li>
              <Link to="useEffect">UseEffect()</Link>
            </li>
            <li>
              <Link to="useRef">useRef()</Link>
            </li>
            <li>
              <Link to="useMemo">UseMemo()</Link>
            </li>
            <li>
              <Link to="useCallback">useCallback()</Link>
            </li>
            <li>
              <Link to="useContext">useContext()</Link>
            </li>
          </ul>
        </Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/UseState" element={<UseState />} />
          <Route path="/UseEffect" element={<UseEffect />} />
          <Route path="/useRef" element={<UseRef />} />
          <Route path="/useMemo" element={<UseMemo />} />
          <Route path="/useCallback" element={<UseCallback />} />
          <Route path="/useContext" element={<UseContext />} />
        </Routes>
      </ContainerDefault>
    </DataContext.Provider>
  );
}

export default App;
