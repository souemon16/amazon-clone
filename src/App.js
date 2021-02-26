import React from 'react';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Chekcout from './Component/Checkout/Chekcout';
import Login from './Component/Login/Login';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/checkout">
          <Chekcout />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
