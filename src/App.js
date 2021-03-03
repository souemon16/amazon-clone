import React, { useEffect } from 'react';
import Home from './Component/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Chekcout from './Component/Checkout/Chekcout';
import Login from './Component/Login/Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import Payment from './Component/Payment/Payment';

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("The User Is :", authUser);
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/checkout">
          <Chekcout />
        </Route>

        <Route path="/payment">
          <Payment />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
