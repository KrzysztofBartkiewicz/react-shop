import React, { useContext, useEffect, useState } from 'react';
import Header from '../../components/organisms/Header';
import List from '../../components/molecules/List';
import Product from '../../components/molecules/Product';
import RootContext from '../../context/RootContext';
import ServiceInfo from '../../components/molecules/ServiceInfo';
import {
  StyledHome,
  StyledSelected,
  StyledServices,
  StyledServicesHeading,
  StyledServicesWrapper,
} from './StyledHome';
import { listTypes } from '../../helpers/listTypes';
import { iconsTypes } from '../../helpers/iconsTypes';
import { getUniqueRandoms } from '../../utils';
import { StyledSelectedHeading } from './StyledHome';

const Home = () => {
  const { setHomeRenderFlag, initialProducts } = useContext(RootContext);

  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setHomeRenderFlag(true);
    return () => setHomeRenderFlag(false);
  }, []);

  useEffect(() => {
    if (initialProducts.length !== 0) {
      const randomArr = getUniqueRandoms(0, initialProducts.length - 1, 4);
      setSelected(randomArr.map((value) => initialProducts[value]));
    }
  }, [initialProducts]);

  const renderServices = () => (
    <StyledServices>
      <StyledServicesHeading headingType="h5">
        Why should You choose us?
      </StyledServicesHeading>
      <StyledServicesWrapper>
        <ServiceInfo icon={iconsTypes.Car2Icon} heading="Free Shipping">
          All purchases over $399 are eligible for free shipping via UPS Pack
          and Ship.
        </ServiceInfo>

        <ServiceInfo icon={iconsTypes.EasyIcon} heading="Easy Payments">
          All payments are processed instantly over a secure payment protocol.
        </ServiceInfo>

        <ServiceInfo
          icon={iconsTypes.GuaranteeIcon}
          heading="Money-Back Guarantee"
        >
          If an item arrived damaged or you've changed your mind, you can send
          it back for a full refund.
        </ServiceInfo>

        <ServiceInfo icon={iconsTypes.FinestIcon} heading="Finest Quality">
          Designed to last, each of our products has been crafted with the
          finest materials.
        </ServiceInfo>
      </StyledServicesWrapper>
    </StyledServices>
  );

  return (
    <StyledHome>
      <Header />
      <StyledSelected>
        <StyledSelectedHeading headingType="h5">
          Selected for You
        </StyledSelectedHeading>
        {selected && (
          <List
            array={selected}
            listType={listTypes.productsList}
            listComponent={Product}
          />
        )}
      </StyledSelected>
      {renderServices()}
    </StyledHome>
  );
};

export default Home;
