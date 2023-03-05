import React from 'react';
import { Blocks } from 'react-loader-spinner';
import { Backdrop } from './Loader.styled';

export const Loader = () => {
  return (
    <Backdrop>
      <Blocks
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
      />
    </Backdrop>
  );
};
