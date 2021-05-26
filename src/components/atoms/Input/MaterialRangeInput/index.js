import React, { useContext } from 'react';
import RootContext from '../../../../context/RootContext';
import { useStyles, PrettoSlider } from './styles';

const MaterialRangeInput = ({ min, max }) => {
  const classes = useStyles();
  const context = useContext(RootContext);
  const { handleProductPriceChange, productPriceRange } = context;

  return (
    <div className={classes.root}>
      <PrettoSlider
        value={productPriceRange}
        min={min}
        max={max}
        onChange={(event, value) => handleProductPriceChange(value)}
        valueLabelDisplay="auto"
        aria-label="pretto slider"
      />
    </div>
  );
};

export default MaterialRangeInput;
