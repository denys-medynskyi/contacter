import React from 'react';
import './App.css';
import ContactList from "./ContactList";
import CreateContactForm from "./CreateContactForm";
import EditContactForm from "./EditContactForm";
import useContactState from "./useContactState";
import { Router } from "@reach/router";
import NavBar from "./NavBar";

function App() {
  const { contacts, addContact, deleteContact } = useContactState([]);

  debugger

  return (
    <div className="App">
      <NavBar />
      <Router>
        <ContactList
          path="/"
          contacts={contacts}
          deleteContact={deleteContact}
        />

        <CreateContactForm
          path="/contacts/new"
          saveContact={contactData => {
            addContact(contactData);
          }}
        />

        <EditContactForm
          path="/contacts/:id/edit"
          saveContact={contactData => {
            addContact(contactData);
          }}
        />
      </Router>
    </div>
  );
}

export default App;
