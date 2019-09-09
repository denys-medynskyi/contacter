import { useState } from 'react';
import database from "./database";

export default (initialState) => {
  const [contacts, setContacts] = useState(initialState);

  database.listContacts().then((contacts) => {
    setContacts(contacts);
  })

  return {
    contacts,
    addContact: contactData => {
      let newContact = Object.assign(contactData, {uid: contactData.name});
      setContacts([...contacts, newContact]);

      database.addContact(newContact);
    },
    deleteContact: uid => {
      const contactsAfterRemoval = contacts.filter(
        contact => contact.uid !== uid
      );

      setContacts(contactsAfterRemoval);

      database.deleteContact(uid);
    }
  };
};
