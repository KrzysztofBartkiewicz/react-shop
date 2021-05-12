import React from 'react';
import Modal from '../components/molecules/Modal';
import Navbar from '../components/molecules/Navbar';

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
