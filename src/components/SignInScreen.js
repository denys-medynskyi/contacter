// Import FirebaseAuth and firebase.
import React from "react";
// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { Grid, Typography } from "@material-ui/core";

const SignInScreen = ({ logIn }) => {
  // Configure FirebaseUI.
  // const uiConfig = {
  //   // Popup signin flow rather than redirect flow.
  //   signInFlow: "popup",
  //   // We will display Google and Facebook as auth providers.
  //   signInOptions: [
  //     firebase.auth.GoogleAuthProvider.PROVIDER_ID
  //   ],
  //   callbacks: {
  //     // Avoid redirects after sign-in.
  //     signInSuccessWithAuthResult: () => false
  //   }
  // };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <Typography>Please sign-in:</Typography>
      <a onClick={() => logIn({ displayName: "Denys" })}>Login</a>
      {/* <StyledFirebaseAuth
        uiConfig={uiConfig}
        firebaseAuth={firebase.auth()}
      /> */}
    </Grid>
  );
};

export default SignInScreen;
