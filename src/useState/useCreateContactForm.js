import { useState } from "react";

export default ({ saveContact }) => {
  const defaultContact = {
    name: "",
    location: ""
  };

  const [form, setForm] = useState(defaultContact);

  return {
    form,
    handleChange: event => {
      event.persist();

      setForm(form => ({ ...form, [event.target.name]: event.target.value }));
    },
    handleSubmit: event => {
      event.preventDefault();
      saveContact(form);
    }
  };
};
