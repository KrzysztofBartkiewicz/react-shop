import React from 'react';
import Navbar from '../components/molecules/Navbar';
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
