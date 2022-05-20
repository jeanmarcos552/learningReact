import { Link, Route, Routes } from 'react-router-dom';

import { Home } from './Pages/Home';
import { UseEffect } from './Pages/Hooks/UseEffect';
import { UseState } from './Pages/Hooks/UseState';
import { ContainerDefault } from './style';

function App() {
  return (
    <ContainerDefault>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="useState">UseState</Link>
        </li>
        <li>
          <Link to="useEffect">UseEffect</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/UseState" element={<UseState />} />
        <Route path="/UseEffect" element={<UseEffect />} />
      </Routes>
    </ContainerDefault>
  );
}

export default App;
