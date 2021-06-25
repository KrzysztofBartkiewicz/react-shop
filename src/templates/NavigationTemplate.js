import React, { useContext } from 'react';
import MaterialModal from '../components/modals/MaterialModal';
import Navbar from '../components/organisms/Navbar';
import Cart from '../components/organisms/Cart';
import RootContext from '../context/RootContext';

const NavigationTemplate = ({ children }) => {
  const { isCartOpen, handleCartOpen } = useContext(RootContext);
  return (
    <>
      <Navbar />
      <MaterialModal isOpen={isCartOpen} toggleOpenFn={handleCartOpen}>
        <Cart />
      </MaterialModal>
      {children}
      {/* footer */}
    </>
  );
};

export default NavigationTemplate;
