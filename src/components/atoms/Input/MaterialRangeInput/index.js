import React from 'react';
import { useStyles, PrettoSlider } from './styles';

const MaterialRangeInput = ({ min, max, onChangeCommittedFn }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <PrettoSlider
        min={min}
        max={max}
        onChangeCommitted={(event, value) => onChangeCommittedFn(event, value)}
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        defaultValue={20}
      />
    </div>
  );
};

export default MaterialRangeInput;
