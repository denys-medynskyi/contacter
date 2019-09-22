import React from "react";
import { AuthUserContext, withAuthorization } from "components/Session"

const AccountPage = () => {
  return (
    <AuthUserContext.Consumer>
      {authUser => {
        return (
          <div>
            <h1>Account: {authUser.email}</h1>
          </div>
        );
      }}
    </AuthUserContext.Consumer>
  );
}

const condition = authUser => !!authUser

export default withAuthorization(condition)(AccountPage);
