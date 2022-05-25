import { Route, Routes } from 'react-router-dom';
import { Home } from '../../Pages/Home';

import { UseCallback } from '../../Pages/Hooks/UseCallback';
import { UseContext } from '../../Pages/Hooks/UseContext';
import { UseEffect } from '../../Pages/Hooks/UseEffect';
import { UseMemo } from '../../Pages/Hooks/UseMemo';
import { UseRef } from '../../Pages/Hooks/UseRef';
import { UseState } from '../../Pages/Hooks/UseState';

export function Content() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/UseState" element={<UseState />} />
      <Route path="/UseEffect" element={<UseEffect />} />
      <Route path="/useRef" element={<UseRef />} />
      <Route path="/useMemo" element={<UseMemo />} />
      <Route path="/useCallback" element={<UseCallback />} />
      <Route path="/useContext" element={<UseContext />} />
    </Routes>
  );
}
