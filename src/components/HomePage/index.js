import React from "react";

import { withAuthorization } from "components/Session";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>The page is accessible for every user</p>
    </div>
  );
}

const condition = authUser => !!authUser

export default withAuthorization(condition)(HomePage);
