import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Trains from "./components/Trains/Trains";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { check } from "./actions/user";
import Cookies from "js-cookie";
import Profile from "./components/Profile/Profile";
import Admin from "./components/Admin/Admin";
import NotFound from "./components/NotFound/NotFound";

const App = () => {
  const token = Cookies.get("token");
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(check());
    } else {
      console.log("you are not logged in");
    }
  });

  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Trains />
        </Route>

        <Route exact path="/admin">
          <Admin />
        </Route>

        <Route exact path="/profile">
          <Profile />
        </Route>

        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
