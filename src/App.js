import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";

import HomePage from "./pages/HomePage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}
