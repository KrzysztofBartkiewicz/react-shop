import React, { useContext } from 'react';
import CustomModal from '../components/modals/CustomModal';
import SearchBox from '../components/organisms/SearchBox';
import Cart from '../components/organisms/Cart';
import Navbar from '../components/organisms/Navbar';
import RootContext from '../context/RootContext';
import Footer from '../components/organisms/Footer';

const NavigationTemplate = ({ children }) => {
  const { isCartOpen, setCartVisibility, isSearchOpen, setSearchVisibility } =
    useContext(RootContext);

  return (
    <>
      <Navbar />
      <CustomModal isOpen={isCartOpen} onCloseFn={setCartVisibility}>
        <Cart />
      </CustomModal>
      <CustomModal isOpen={isSearchOpen} onCloseFn={setSearchVisibility}>
        <SearchBox />
      </CustomModal>
      {children}
      <Footer />
    </>
  );
};

export default NavigationTemplate;
