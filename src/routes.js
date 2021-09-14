import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home'
import Cardapio from './pages/Cardapio'

export default function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={Cardapio} path='/cardapio' />
      </Switch>
    </BrowserRouter>
)}
