import React from 'react';

export type PropStore = {
  children: React.ReactNode;
};

export interface IContext {
  updateName: (value: any) => void;
  name: string;
}
