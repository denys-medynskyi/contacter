import { useState } from "react";

export default (callback) => {
  const emptyForm = {
    name: ""
  };
  
  const [form, setForm] = useState(emptyForm);

  return {
    form,
    handleChange: event => {
      event.persist();

      setForm(form => ({ ...form, [event.target.name]: event.target.value }));
    },
    handleSubmit: event => {
      event.preventDefault();
      setForm(emptyForm);
      callback(form);
    }
  };
};
