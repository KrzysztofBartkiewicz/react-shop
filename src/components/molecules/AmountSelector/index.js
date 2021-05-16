import React from 'react';
import Button from '../../atoms/Button';
import Paragraph from '../../atoms/Paragraph';
import { iconsTypes } from '../../../helpers/iconsTypes';
import { StyledAmountSelector } from './StyledAmountSelector';

const AmountSelector = ({ onAddFn, onLessFn, value }) => {
  return (
    <StyledAmountSelector>
      <Button onClickFn={onAddFn} menu icon={iconsTypes.minus} />
      <Paragraph>{value}</Paragraph>
      <Button onClickFn={onLessFn} menu icon={iconsTypes.plus} />
    </StyledAmountSelector>
  );
};

export default AmountSelector;
