import React from "react";
import { Hello } from "./Hello";
import { Info } from "./Info";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { Chats } from "./components/Chats";

export const App = (props: any): JSX.Element => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <Hello />
    <Info />
    <Router>
      <Switch>
        <Route path="/">
          <Login />
        </Route>
        <Route path="/chats">
          <Chats />
        </Route>
      </Switch>
    </Router>
  </div>
);
