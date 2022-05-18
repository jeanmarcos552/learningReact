import React from 'react';
import { Button } from './style';

export function PageButton({ ...props }: React.ButtonHTMLAttributes<{}>) {
  return <Button {...props} />;
}
