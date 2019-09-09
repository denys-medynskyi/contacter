import React from 'react';
import './App.css';
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";
import useContactState from "./useContactState";
import { Router } from "@reach/router";
import NavBar from "./NavBar";

function App() {
  const { contacts, addContact, deleteContact } = useContactState([]);

  return (
    <div className="App">
      <NavBar />
      <Router>
        <ContactList path="/" contacts={contacts} deleteContact={deleteContact} />
        <ContactForm
          path="/contacts/new"
          saveContact={contactData => {
            addContact(contactData);
          }}
        />
      </Router>
    </div>
  );
}

export default App;
