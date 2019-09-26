import React from "react";
import PropTypes from "prop-types";

import {
  withAuthUser,
  withAuthorization
} from "components/Session";

const AccountPage = ({ authUser }) => {
  return (
    <div>
      <h1>Account: {authUser.email}</h1>
    </div>
  );
}

AccountPage.propTypes = {
  authUser: PropTypes.shape({
    email: PropTypes.string
  })
};

const condition = authUser => !!authUser

export default withAuthUser(withAuthorization(condition)(AccountPage));
