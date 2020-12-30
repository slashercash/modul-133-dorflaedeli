import React from 'react';
import AppStyle from './AppStyle';
import HeaderBar from './headerBar/HeaderBar';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Products from './pages/products/Products';
import ProductOverview from './pages/productoverview/ProductOverview';
import Cart from './pages/cart/Cart';

const App = () => (
  <React.Fragment>
    <AppStyle />
    <Router>
      <HeaderBar />
      <Switch>
        <Route exact path="/">
          <Redirect to="/products" />
        </Route>
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={ProductOverview} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </Router>
  </React.Fragment>
);

export default App;
