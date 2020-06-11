import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Parlamentar from '../pages/Parlamentar';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/senador/:id" component={Parlamentar} />
  </Switch>
);

export default Routes;
