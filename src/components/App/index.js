import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withAuthentication } from "components/Session";

import Navigation from "components/Navigation";
import SignUpPage from "components/SignUp";
import SignInPage from "components/SignIn";
import AccountPage from "components/AccountPage";
import HomePage from "components/HomePage";
import ContactListPage from "components/ContactListPage";
import ContactEditPage from "components/ContactEditPage";
import ContactNewPage from "components/ContactNewPage";

import * as ROUTES from "constants/routes";

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <hr />
        <Route exact path={ROUTES.HOME} component={HomePage} />
        <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route exact path={ROUTES.CONTACTS} component={ContactListPage} />
        <Route path={ROUTES.CONTACT_EDIT} component={ContactEditPage} />
        <Route path={ROUTES.CONTACT_NEW} component={ContactNewPage} />
      </div>
    </Router>
  );
};
export default withAuthentication(App);
