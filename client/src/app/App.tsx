import React from 'react';
import AppStyle from './AppStyle';
import HeaderBar from './headerBar/HeaderBar';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/home/Home';
import ProductOverview from './pages/productoverview/ProductOverview';
import Cart from './pages/cart/Cart';

const App = () => (
  <React.Fragment>
    <AppStyle />
    <Router>
      <HeaderBar />
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home" component={Home} />
        <Route path="/products/:id" component={ProductOverview} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </Router>
  </React.Fragment>
);

export default App;
