import React from 'react';

const Heading = ({ headingType, children }) => {
  const renderHeading = (headingType) => {
    switch (headingType) {
      case 'h1':
        return <h1>{children}</h1>;
      case 'h2':
        return <h2>{children}</h2>;

      default:
        return <h3>{children}</h3>;
    }
  };

  return <>{renderHeading(headingType)}</>;
};

export default Heading;
