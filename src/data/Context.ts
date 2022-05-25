import { createContext } from 'react';
import { IContext } from '../types/store';

export const initalState = {
  name: 'Jean Marcos',
  updateName: () => null,
};

const DataContext = createContext<IContext>(initalState);
export default DataContext;
