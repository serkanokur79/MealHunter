import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import App from '../App'
import Meal from './Meal';

const Router = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/meal/:id" component={Meal} />
      </Switch>
    </HashRouter>
  )
}

export default Router;