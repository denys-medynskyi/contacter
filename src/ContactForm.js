import React from "react";
import TextField from "@material-ui/core/TextField";
import useFormState from "./useFormState";

const ContactForm = ({ saveContact }) => {
  const { value, reset, onChange } = useFormState();

  return (
    <form
      onSubmit={event => {
        event.preventDefault();

        saveContact(value);
        reset();
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Add Contact"
        margin="normal"
        onChange={onChange}
        value={value}
      />
    </form>
  );
};

export default ContactForm;
