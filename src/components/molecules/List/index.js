import React from 'react';
import { StyledList, StyledListItem } from './StyledList';

const List = ({ array, listType, listComponent: ListComponent, className }) => {
  return (
    <StyledList className={className} listType={listType}>
      {array.map((item) => (
        <StyledListItem key={item.id} listType={listType}>
          {React.isValidElement(ListComponent) ? (
            React.cloneElement(ListComponent, { ...item })
          ) : (
            <ListComponent {...item} />
          )}
        </StyledListItem>
      ))}
    </StyledList>
  );
};

export default List;
