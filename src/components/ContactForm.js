import React from "react";
import TextField from "@material-ui/core/TextField";
import Error from "./Error";
import TagInput from "components/TagInput";

const ContactForm = ({
  form,
  handleSubmit,
  handleChange,
  error,
  submitLabel
}) => {
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
      <Error error={error} />

      <TagInput />
    </form>
  );
};

export default ContactForm;
