import React from "react";
import ContactForm from "./ContactForm";
import useEditContactFormState from "./useEditContactFormState";

const EditContactForm = ({ updateContact, id }) => {
  const { form, handleChange, handleSubmit } = useEditContactFormState({
    updateContact,
    id
  });

  return (
    <ContactForm
      form={form}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      submitLabel="Update"
    />
  );
};

export default EditContactForm;
