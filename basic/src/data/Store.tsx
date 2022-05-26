import { useState } from 'react';
import DataContext, { initalState } from './Context';
import { PropStore } from '../types/store';

export default function Store({ children }: PropStore) {
  const [state, setState] = useState(initalState);

  function updateState(key: string, value: any) {
    setState({
      ...state,
      [key]: value,
    });
  }

  return (
    <DataContext.Provider
      value={{
        updateName: (value) => updateState('name', value),
        name: state.name,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
