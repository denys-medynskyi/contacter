import React from "react";
import {
  withAuthUser,
  withAuthorization
} from "components/Session";

const AccountPage = (props) => {
  return (
    <div>
      <h1>Account: {props.authUser.email}</h1>
    </div>
  );
}

const condition = authUser => !!authUser

export default withAuthUser(withAuthorization(condition)(AccountPage));
