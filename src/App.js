import React from 'react';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Chekcout from './Component/Checkout/Chekcout';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
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
