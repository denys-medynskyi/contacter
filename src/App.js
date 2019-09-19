import React from 'react';
import './App.css';
import ContactList from "./ContactList";
import CreateContactForm from "./CreateContactForm";
import EditContactForm from "./EditContactForm";
import useContactState from "./useContactState";
import useUserState from "./useUserState";
import { Router } from "@reach/router";
import NavBar from "./NavBar";
import SignInScreen from "./SignInScreen";

// TODO: extract
import { useState } from "react";

function App() {
                 const {
                   contacts,
                   addContact,
                   updateContact,
                   deleteContact
                 } = useContactState([]);

                 // with current user
                  const {currentUser, logIn, logOut} = useUserState({
                    displayName: "Denys Medynskyi"
                  });
                 // without current user
                //  const [currentUser, setCurrentUser] = useState(null);

                 return (
                   <div className="App">
                     <NavBar currentUser={currentUser} logIn={logIn} logOut={logOut}/>

                     <Router>
                       {currentUser ? (
                         <ContactList
                           path="/"
                           contacts={contacts}
                           deleteContact={deleteContact}
                         />
                       ) : (
                         <SignInScreen path="/" logIn={logIn} />
                       )}

                       <CreateContactForm
                         path="/contacts/new"
                         saveContact={contactData => {
                           addContact(contactData);
                         }}
                       />

                       <EditContactForm
                         path="/contacts/:id/edit"
                         updateContact={contactData => {
                           updateContact(contactData);
                         }}
                       />

                       <SignInScreen path="/sign_in" />
                     </Router>
                   </div>
                 );
               }

export default App;
