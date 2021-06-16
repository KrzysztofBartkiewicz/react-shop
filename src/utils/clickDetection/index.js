export const isClickOutside = (x, y, node) => {
  const nodeCoords = node.getBoundingClientRect();

  if (
    x > nodeCoords.left &&
    x < nodeCoords.right &&
    y > nodeCoords.top &&
    y < nodeCoords.bottom
  ) {
    return false;
  } else {
    return true;
  }
};
