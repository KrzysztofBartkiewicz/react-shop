import React from 'react';
import Navbar from '../components/organisms/Navbar';
import Modal from '../components/molecules/Modal';

const NavigationTemplate = ({ children }) => {
  return (
    <>
      <Navbar />
      <Modal />
      {children}
      {/* footer */}
    </>
  );
};

export default NavigationTemplate;
