import _ from 'lodash';

export const capitalize = (str) => {
  return [...str]
    .map((letter, index) => (index === 0 ? letter.toUpperCase() : letter))
    .join('');
};

export const getUniqueRandoms = (min, max, number) => {
  if (number > max) {
    throw new Error('Max must be bigger or equal number');
  }

  let ranNums = [];

  for (let i = 0; i < number; i++) {
    let ran;
    do {
      ran = _.random(min, max);
    } while (ranNums.includes(ran));
    ranNums.push(ran);
  }

  return ranNums;
};
