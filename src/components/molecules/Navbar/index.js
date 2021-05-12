import React, { useContext } from 'react';
import RootContext from '../../../context/RootContext';
import { iconsTypes } from '../../../helpers/iconsTypes';
import { routes } from '../../../helpers/routes';
import Button from '../../atoms/Button';
import NavigationLink from '../../atoms/NavigationLink';

const Navbar = () => {
  const context = useContext(RootContext);

  return (
    <ul>
      <li>
        <NavigationLink to={routes.home}>Home</NavigationLink>
      </li>
      <li>
        <NavigationLink to={routes.products}>Products</NavigationLink>
      </li>
      <li>
        <Button
          icon={iconsTypes.cart}
          secondary
          onClickFn={context.handleCartModalOpen}
        />
      </li>
    </ul>
  );
};

export default Navbar;
