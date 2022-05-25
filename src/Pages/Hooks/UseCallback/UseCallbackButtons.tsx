import { memo } from 'react';
import { PageButton } from '../../../Components/Button';

import { Row } from '../../../Components/Row';

interface PropUseCallbackButtons {
  count: (delta: number) => void;
}
function UseCallbackButtons({ count }: PropUseCallbackButtons) {
  console.log('renderizou...');
  return (
    <Row align="center" direction="row" style={{ paddingBottom: 10 }}>
      <PageButton onClick={() => count(6)}>+6</PageButton>
      <PageButton onClick={() => count(12)}>+12</PageButton>
      <PageButton onClick={() => count(18)}>+18</PageButton>
    </Row>
  );
}

export default memo(UseCallbackButtons);
