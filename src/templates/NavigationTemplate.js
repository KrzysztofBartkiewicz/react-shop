import React, { useContext } from 'react';
import Navbar from '../components/organisms/Navbar';
import Modal from '../components/molecules/Modal';
import DrawerMenu from '../components/organisms/DrawerMenu';
import RootContext from '../context/RootContext';

const NavigationTemplate = ({ children }) => {
  const { isMenuOpen } = useContext(RootContext);

  return (
    <>
      <Navbar />
      <DrawerMenu isOpen={isMenuOpen} />
      <Modal />
      {children}
      {/* footer */}
    </>
  );
};

export default NavigationTemplate;
