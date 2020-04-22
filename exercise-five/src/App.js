import React from 'react';
import './App.css';
import Profile from "./pages/user_profile";
import Login from "./pages/login";
import Account from "./pages/create_account";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Profile/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/create-account">
          <Account/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
