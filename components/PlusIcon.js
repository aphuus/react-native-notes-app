import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const PlusIcon = () => {
  return (
    <Svg
      width={60}
      height={60}
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke='white'
    >
      <Path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M12 6v6m0 0v6m0-6h6m-6 0H6'
      />
    </Svg>
  );
};

export default PlusIcon;
