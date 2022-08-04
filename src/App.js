import React, { Component, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from "./Payment"
import Thankyou from './Thankyou';



function App() {

  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {

      console.log("THE USER IS >>> ", authUser);

      if (authUser) {

        dispatch({
          type: "SET_USER",
          user: authUser,
        });

      } else {

        dispatch({
          type: "SET_USER",
          user: null,
        });

      }
    })
  }, [])

  return (
    <Router >
      <div className="App">

        <Routes>
          <Route path="/Login" element={<div> <Login /></div>} />
          <Route path="/checkout" element={<div> <Header /><Checkout /></div>} />
          <Route path="/payment" element={<div> <Header /> <Payment />  </div>} />
          <Route path="/thankyou" element={<div> <Header /> <Thankyou /> </div>} />
          <Route path="/" element={<div><Header /> <Home /></div>} />

        </Routes>

      </div>
    </Router>
  );
}

export default App;
