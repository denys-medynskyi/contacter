import React from "react";
import TextField from "@material-ui/core/TextField";

const ContactForm = ({ form, handleSubmit, handleChange, submitLabel }) => {
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        variant="outlined"
        placeholder="Name"
        name="name"
        margin="normal"
        onChange={handleChange}
        value={form.name}
      />

      <br />

      <TextField
        variant="outlined"
        placeholder="Location"
        type="address"
        name="location"
        margin="normal"
        onChange={handleChange}
        value={form.location}
      />

      <br />

      <button type="submit">{submitLabel}</button>
    </form>
  );
};

export default ContactForm;
