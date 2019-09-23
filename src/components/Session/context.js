import React from "react";
const AuthUserContext = React.createContext(null);
export default AuthUserContext;

export const withAuthUser = Component => props => (
  <AuthUserContext.Consumer>
    {authUser => <Component {...props} authUser={authUser} />}
  </AuthUserContext.Consumer>
);
