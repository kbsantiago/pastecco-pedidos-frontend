import React, {useContext} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import StoreProvider from 'components/Store/Provider';
import RoutesPrivate from 'components/Routes/Private/Private'
import PagesLogin from './Login/Login';
import PagesMain from './Main/Main';
import PagesMenu from './Menu/Menu';
import PagesCart from './Cart/Cart'
import StoreContext from 'components/Store/Context';
import PagesOrders from './Orders/Orders';

const PagesRoot = () => {
  
  const { token } = useContext(StoreContext);
  return (
    <Router>
      <StoreProvider>
          <Switch>
            <Route exact path="/">
            {!token ? <Redirect to="/main" /> : <PagesLogin />}
            </Route>
            <Route path="/login" component={PagesLogin}/>
            <RoutesPrivate path="/main" component={PagesMain} exact/>
            <RoutesPrivate path="/menu" component={PagesMenu} />
            <RoutesPrivate path="/cart" component={PagesCart} />
            <RoutesPrivate path="/orders" component={PagesOrders} />
          </Switch>
      </StoreProvider>
    </Router>
  )
}


export default PagesRoot;