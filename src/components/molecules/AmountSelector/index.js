import React from 'react';
import Button from '../../atoms/Button';
import { iconsTypes } from '../../../helpers/iconsTypes';
import {
  StyledAmountSelector,
  StyledParagraph,
  StyledButton,
} from './StyledAmountSelector';

const AmountSelector = ({ onAddFn, onLessFn, value, className }) => {
  return (
    <StyledAmountSelector className={className}>
      <StyledButton
        onClickFn={onLessFn}
        menu
        icon={iconsTypes.MinusIcon}
        isDisabled={value === 1 && true}
      />
      <StyledParagraph>{value}</StyledParagraph>
      <StyledButton onClickFn={onAddFn} menu icon={iconsTypes.PlusIcon} />
    </StyledAmountSelector>
  );
};

export default AmountSelector;
