export const capitalize = (str) => {
  return [...str]
    .map((letter, index) => (index === 0 ? letter.toUpperCase() : letter))
    .join('');
};
