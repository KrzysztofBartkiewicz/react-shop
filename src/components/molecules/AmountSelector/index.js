import React from 'react';
import Button from '../../atoms/Button';
import { iconsTypes } from '../../../helpers/iconsTypes';
import { StyledAmountSelector, StyledParagraph } from './StyledAmountSelector';

const AmountSelector = ({ onAddFn, onLessFn, value }) => {
  return (
    <StyledAmountSelector>
      <Button
        onClickFn={onLessFn}
        menu
        icon={iconsTypes.minus}
        isDisabled={value === 1 && true}
      />
      <StyledParagraph>{value}</StyledParagraph>
      <Button onClickFn={onAddFn} menu icon={iconsTypes.plus} />
    </StyledAmountSelector>
  );
};

export default AmountSelector;
