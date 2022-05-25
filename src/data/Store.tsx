import { useState } from 'react';
import DataContext, { data } from './Context';
import { PropStore } from '../types/store';

export default function Store({ children }: PropStore) {
  const [state, setState] = useState(data);

  return (
    <DataContext.Provider value={{ state, setState }}>
      {children}
    </DataContext.Provider>
  );
}
