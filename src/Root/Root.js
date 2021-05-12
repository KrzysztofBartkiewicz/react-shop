import React from 'react';
import Button from '../components/atoms/Button';
import GlobalStylesTemplate from '../templates/GlobalStylesTemplate';

const Root = () => {
  return (
    <GlobalStylesTemplate>
      <Button onClickFn={() => alert('KOSZYK')}>add to cart</Button>
      <Button onClickFn={() => console.log('OPINIE')} secondary>
        Reviews (2)
      </Button>
    </GlobalStylesTemplate>
  );
};

export default Root;
