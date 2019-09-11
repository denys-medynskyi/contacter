import { useState } from "react";

export default ({ saveContact }) => {
  const defaultForm = {
    name: "",
    location: ""
  };

  const [form, setForm] = useState(defaultForm);

  return {
    form,
    handleChange: event => {
      event.persist();

      setForm(form => ({ ...form, [event.target.name]: event.target.value }));
    },
    handleSubmit: event => {
      event.preventDefault();
      setForm(defaultForm);
      saveContact(form);
    }
  };
};
