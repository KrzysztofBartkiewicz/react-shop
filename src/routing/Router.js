import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { routes } from '../helpers/routes';
import NavigationTemplate from '../templates/NavigationTemplate';
import Checkout from '../views/Checkout';
import Contact from '../views/Contact';
import Home from '../views/Home';
import Login from '../views/Login';
import Payment from '../views/Payment';
import Products from '../views/Products';
import Signup from '../views/Signup';
import SingleProduct from '../views/SingleProduct';

const Router = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <NavigationTemplate>
        <Switch>
          <Route exact path={routes.home} component={Home} />
          <Route path={routes.products} component={Products} />
          <Route path={routes.contact} component={Contact} />
          <Route path={routes.login} component={Login} />
          <Route path={routes.signup} component={Signup} />
          <Route path={routes.payment} component={Payment} />
          <Route path={routes.checkout} component={Checkout} />
          <Route path={routes.singleProduct} component={SingleProduct} />
        </Switch>
      </NavigationTemplate>
    </BrowserRouter>
  );
};

export default Router;
