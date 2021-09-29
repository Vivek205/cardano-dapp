import Error404Page from "Pages/404";
import FAQPage from "Pages/faq";
import TermsOfServicePage from "Pages/termsofservice";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <FAQPage />
        </Route>
        <Route path="/faq">
          <FAQPage />
        </Route>
        <Route path="/termsofservice">
          <TermsOfServicePage />
        </Route>
        <Route>
          <Error404Page />
        </Route>
      </Switch>
    </Router>
  );
}
