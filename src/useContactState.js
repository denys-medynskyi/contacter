import { useState } from 'react';
import database from "./database";
import { useToasts } from "react-toast-notifications";
import { notifications } from "./texts/notifications.json";

export default (initialState) => {
  const [contacts, setContacts] = useState(initialState);
  const { addToast } = useToasts();

  database.listContacts().then((contacts) => {
    setContacts(contacts);
  })

  return {
    contacts,
    addContact: contactData => {
      let newContact = Object.assign(contactData, { uid: contactData.name });

      database.addContact(newContact).then(function(data) {
        const { error } = data;

        if (error) {
          addToast(error.message, { appearance: "error" });
        } else {
          addToast(notifications.created, { appearance: "success" });
          setContacts([...contacts, newContact]);
        }
      });
    },
    deleteContact: uid => {
      const { error } = database.deleteContact(uid);

      if (error) {
        addToast(error.message, { appearance: "error" });
      } else {
        addToast(notifications.deleted, { appearance: "success" });
        const contactsAfterRemoval = contacts.filter(
          contact => contact.uid !== uid
        );

        setContacts(contactsAfterRemoval);
      }
    }
  };
};
