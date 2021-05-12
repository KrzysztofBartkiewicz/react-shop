import React from 'react';
import Button from '../components/atoms/Button';
import Input from '../components/atoms/Input';
import GlobalStylesTemplate from '../templates/GlobalStylesTemplate';

const Root = () => {
  return (
    <GlobalStylesTemplate>
      <Button onClickFn={() => alert('KOSZYK')}>add to cart</Button>
      <Button onClickFn={() => console.log('OPINIE')} secondary>
        Reviews (2)
      </Button>
      <Button icon></Button>
      <Input placeholder="Email" />
    </GlobalStylesTemplate>
  );
};

export default Root;
