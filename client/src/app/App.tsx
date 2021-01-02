import React from 'react';
import AppStyle from './AppStyle';
import HeaderBar from './headerBar/HeaderBar';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ProductsPage from './pages/productspage/ProductsPage';
import ProductPage from './pages/productpage/ProductPage';
import CartPage from './pages/cartpage/CartPage';
import CheckoutPage from './pages/checkoutpage/CheckoutPage';

const App = () => (
  <React.Fragment>
    <AppStyle />
    <Router>
      <HeaderBar />
      <Switch>
        <Route exact path="/">
          <Redirect to="/products" />
        </Route>
        <Route exact path="/products" component={ProductsPage} />
        <Route exact path="/products/:id" component={ProductPage} />
        <Route exact path="/cart" component={CartPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
      </Switch>
    </Router>
  </React.Fragment>
);

export default App;
