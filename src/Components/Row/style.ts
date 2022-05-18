import styled from 'styled-components';

type PropContainer = {
  direction: 'row' | 'column' | 'column-reverse' | 'inherit' | 'row-reverse';
  align?: 'center' | 'flex-start' | 'flex-end';
};

export const Container = styled.div<PropContainer>`
  display: flex;
  flex-direction: ${(prop) => prop.direction};
  align-items: ${(prop) => prop.align || 'center'};
  justify-content: ${(prop) => prop.align || 'center'};
  justify-items: ${(prop) => prop.align || 'center'};
`;
