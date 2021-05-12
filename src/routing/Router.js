import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from '../helpers/routes';
import NavigationTemplate from '../templates/NavigationTemplate';
import Home from '../views/Home';
import Products from '../views/Products';

const Router = () => {
  return (
    <BrowserRouter>
      <NavigationTemplate>
        <Switch>
          <Route exact path={routes.home} component={Home} />
          <Route path={routes.products} component={Products} />
        </Switch>
      </NavigationTemplate>
    </BrowserRouter>
  );
};

export default Router;
