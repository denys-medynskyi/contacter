import { useState, useEffect } from "react";
import database from "./database";

export default ({ updateContact, id }) => {
  const defaultContact = {
    name: "",
    location: ""
  };

  const [form, setForm] = useState(defaultContact);

  useEffect(() => {
    if (id) {
      async function fetchData() {
        const contact = await database.loadContact(id);
        setForm(Object.assign(contact, {id: id}));
      }

      fetchData();
    }
  }, []);

  return {
    form,
    handleChange: event => {
      event.persist();

      setForm(form => ({ ...form, [event.target.name]: event.target.value }));
    },
    handleSubmit: event => {
      event.preventDefault();
      updateContact(form);
      database.updateContact(form);
    }
  };
};
