import { createContext } from 'react';

interface IContext {
  state: {
    name?: string;
  };
  setState: (value: any) => void;
}
export const data = {
  name: 'Jean Marcos',
};

const DataContext = createContext<IContext>({
  state: {},
  setState: () => null,
});
export default DataContext;
