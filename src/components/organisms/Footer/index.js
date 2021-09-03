import React, { useContext } from 'react';
import RootContext from '../../../context/RootContext';
import Logo from '../../atoms/Logo';
import Paragraph from '../../atoms/Paragraph';
import NavigationLink from '../../atoms/NavigationLink';
import AmountInfo from '../../atoms/NotificationCount';
import { iconsTypes } from '../../../helpers/iconsTypes';
import {
  StyledWrapper,
  StyledFooter,
  StyledLogoWrapper,
  StyledSocials,
  StyledLink,
  StyledAmount,
} from './StyledFooter';

const Footer = () => {
  const { cart, cartTotalPrice } = useContext(RootContext);

  const renderLogoWrapper = () => (
    <StyledLogoWrapper>
      <Logo />
      <Paragraph>
        High quality Scandinavian clocks made from eco-friendly materials.
        <br />
        Designed for modern, minimalist people.
      </Paragraph>
      <StyledSocials>
        <iconsTypes.FBIcon />
        <iconsTypes.TwitterIcon />
        <iconsTypes.YTIcon />
        <iconsTypes.LinkedInIcon />
        <iconsTypes.InstagramIcon />
      </StyledSocials>
    </StyledLogoWrapper>
  );

  const renderLinksWrapper = () => (
    <StyledWrapper>
      <Paragraph weight="bold">Shop</Paragraph>
      <NavigationLink size="s" weight="regular">
        Home
      </NavigationLink>
      <NavigationLink size="s" weight="regular">
        Products
      </NavigationLink>
      <NavigationLink size="s" weight="regular">
        Contact
      </NavigationLink>
    </StyledWrapper>
  );

  const renderContactWrapper = () => (
    <StyledWrapper>
      <Paragraph weight="bold">Contact</Paragraph>
      <StyledLink href="mailto:abcd@gmail.com">abcd@gmail.com</StyledLink>
      <StyledLink href="tel:+48123456789">+48 123 456 789</StyledLink>
    </StyledWrapper>
  );

  const renderCartWrapper = () => (
    <StyledWrapper>
      <Paragraph weight="bold">Cart</Paragraph>
      <StyledAmount>
        <Paragraph>Items</Paragraph>
        <AmountInfo value={cart.length} />
      </StyledAmount>
      <Paragraph>Total price: {`$${cartTotalPrice}`}</Paragraph>
    </StyledWrapper>
  );

  return (
    <StyledFooter>
      {renderLogoWrapper()}
      {renderLinksWrapper()}
      {renderContactWrapper()}
      {renderCartWrapper()}
    </StyledFooter>
  );
};

export default Footer;
