import React, { useState } from 'react';
import { useStyles, PrettoSlider } from './styles';

const MaterialRangeInput = ({ min, max, onChangeCommittedFn }) => {
  const classes = useStyles();
  const [rangeValues, setRangeValues] = useState([min, max]);

  return (
    <div className={classes.root}>
      <PrettoSlider
        value={rangeValues}
        min={min}
        max={max}
        onChange={(undefined, value) => setRangeValues(value)}
        onChangeCommitted={(nundefined, value) => onChangeCommittedFn(value)}
        valueLabelDisplay="auto"
        aria-label="pretto slider"
      />
    </div>
  );
};

export default MaterialRangeInput;
