import React from "react";
import TextField from "@material-ui/core/TextField";
import useFormState from "./useFormState";
import database from "./database";

const EditContactForm = ({ saveContact }) => {
  // database.loadContact().then((contact) => {})
  const { form, handleChange, handleSubmit } = useFormState({
    saveContact: saveContact
  });

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
        form={form.location}
      />

      {/* <TextField
        variant="outlined"
        placeholder="Social URL"
        name="social_url"
        type="url"
        margin="normal"
        onChange={handleChange}
        form={form.social_url}
      />

      <br />

      <TextField
        variant="outlined"
        placeholder="Phone"
        name="phone"
        type="tel"
        margin="normal"
        onChange={handleChange}
        form={form.phone}
      />

      <br />

      <TextField
        variant="outlined"
        placeholder="Location"
        type="address"
        name="location"
        margin="normal"
        onChange={handleChange}
        form={form.location}
      /> */}

      <br />

      <button type="submit">Create</button>
    </form>
  );
};

export default EditContactForm;
