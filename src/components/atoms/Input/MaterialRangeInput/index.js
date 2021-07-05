import React from 'react';
import { useStyles, PrettoSlider } from './styles';

const MaterialRangeInput = ({ min, max, value, onChangeFn }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <PrettoSlider
        value={value}
        min={min}
        max={max}
        onChange={(event, value) => onChangeFn(value)}
        valueLabelDisplay="auto"
      />
    </div>
  );
};

export default MaterialRangeInput;
