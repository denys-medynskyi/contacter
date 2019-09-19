import { useState, useEffect } from "react";
import database from "../database";
import { useToasts } from "react-toast-notifications";
import { notifications } from "../config/texts/notifications.json";

export default ({initialState, userId}) => {
  const [contacts, setContacts] = useState(initialState);
  const { addToast } = useToasts();


  useEffect(() => {
    async function fetchData() {
      database.listContacts(userId).then(contacts => {
        setContacts(contacts);
      });
    }

    fetchData();
  }, []);

  return {
    contacts,
    addContact: contactData => {
      const enhancedContactData = Object.assign({ userId: userId }, contactData);

      database.addContact(enhancedContactData).then(function(data) {
        const { error } = data;

        if (error) {
          addToast(error.message, { appearance: "error" });
        } else {
          setContacts([...contacts, contactData]);

          addToast(notifications.created, { appearance: "success" });
        }
      });
    },
    updateContact: contactData => {
      database.updateContact(contactData).then(function(data) {
        const { error } = data;

        if (error) {
          addToast(error.message, { appearance: "error" });
        } else {
          const contactsAfterUpdate = contacts.map(
            contact => contact.id === contactData.id ? contactData : contact
          );
          setContacts(contactsAfterUpdate);

          addToast(notifications.updated, { appearance: "success" });
          }
      });
    },
    deleteContact: id => {
      const { error } = database.deleteContact(id);

      if (error) {
        addToast(error.message, { appearance: "error" });
      } else {
        addToast(notifications.deleted, { appearance: "success" });
        const contactsAfterRemoval = contacts.filter(
          contact => contact.id !== id
        );

        setContacts(contactsAfterRemoval);
      }
    }
  };
};
