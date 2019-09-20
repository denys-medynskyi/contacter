// utils
import React from 'react';
import { Router } from "@reach/router";
// styles
import './App.css';
// components
import ContactList from "./components/ContactList";
import CreateContactForm from "./components/CreateContactForm";
import EditContactForm from "./components/EditContactForm";
import NavBar from "./components/NavBar";
import SignInScreen from "./components/SignInScreen";
// state
import useContactState from "./useState/useContactState";
import useUserState from "./useState/useUserState";

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
