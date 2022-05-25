import { Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { CustomHooks } from './Pages/Hooks/CustomHooks';
import { UseCallback } from './Pages/Hooks/UseCallback';
import { UseContext } from './Pages/Hooks/UseContext';
import { UseEffect } from './Pages/Hooks/UseEffect';
import { UseMemo } from './Pages/Hooks/UseMemo';
import { UseReducer } from './Pages/Hooks/UseReducer';
import { UseRef } from './Pages/Hooks/UseRef';
import { UseState } from './Pages/Hooks/UseState';

export const menusRoutes = [
  { path: '/', alias: 'Home', component: <Home /> },
  { path: 'UseState', alias: 'useState()', component: <UseState /> },
  { path: 'UseEffect', alias: 'useEffect()', component: <UseEffect /> },
  { path: 'useRef', alias: 'useRef()', component: <UseRef /> },
  { path: 'UseMemo', alias: 'useMemo()', component: <UseMemo /> },
  { path: 'UseCallback', alias: 'useCallback()', component: <UseCallback /> },
  { path: 'UseContext', alias: 'useContext()', component: <UseContext /> },
  { path: 'UseReducer', alias: 'useReducer()', component: <UseReducer /> },
  { path: 'CustomHooks', alias: 'customHooks()', component: <CustomHooks /> },
];

const RoutesComponents = () => {
  return (
    <Routes>
      {menusRoutes.map((item) => (
        <Route key={item.alias} path={item.path} element={item.component} />
      ))}
    </Routes>
  );
};

export default RoutesComponents;
