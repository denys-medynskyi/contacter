import { useState, useEffect } from "react";
// import firebase from "firebase/app";
import { useToasts } from "react-toast-notifications";
import { notifications } from "./texts/notifications.json";

export default initialState => {
  const [currentUser, setCurrentUser] = useState(initialState);
  const { addToast } = useToasts();

  const logIn = (user) => {
    // firebase.auth().onAuthStateChanged(user => setCurrentUser(user));
    setCurrentUser(user);
  }

  // useEffect(() => {
  //   async function fetchData() {
  //     logIn()
  //   }

  //   fetchData();
  // }, []);

  return {
    currentUser,
    logIn: user => {
      setCurrentUser(user)
      addToast(notifications.user.logIn, { appearance: "success" });
    },
    logOut: () => {
      // firebase.auth().signOut()
      setCurrentUser(null);
      addToast(notifications.user.logOut, { appearance: "success" });
    }
  };
};
