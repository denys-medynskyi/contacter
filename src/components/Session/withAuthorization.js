import React from "react";
import PropTypes from "prop-types";
import { compose } from 'recompose';

import AuthUserContext from "./context";
import { withFirebase } from "components/Firebase";
import * as ROUTES from "constants/routes";

import {
  Redirect
} from "react-router-dom";

const withAuthorization = condition => Component => {
  class WithAuthorization extends React.Component {
    render() {
      return (
        <AuthUserContext.Consumer>
          {authUser =>
            condition(authUser) ? (
              <Component {...this.props} />
            ) : (
              <Redirect to={ROUTES.SIGN_IN} />
            )
          }
        </AuthUserContext.Consumer>
      );
    }
  }

  return compose(
    withFirebase
  )(WithAuthorization);
};

withAuthorization.propTypes = {
  condition: PropTypes.func
};

export default withAuthorization;
