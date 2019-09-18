import React from 'react';
import './App.css';
import ContactList from "./ContactList";
import CreateContactForm from "./CreateContactForm";
import EditContactForm from "./EditContactForm";
import useContactState from "./useContactState";
import { Router } from "@reach/router";
import NavBar from "./NavBar";
import SignInScreen from "./SignInScreen";


function App() {
  const {
    contacts,
    addContact,
    updateContact,
    deleteContact
  } = useContactState([]);

  return (
    <div className="App">
      <NavBar />

      <Router>
        <SignInScreen path="/" />

        {/* <ContactList
          path="/"
          contacts={contacts}
          deleteContact={deleteContact}
        /> */}

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
