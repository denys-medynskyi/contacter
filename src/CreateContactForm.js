import React from "react";
import useCreateContactForm from "./useCreateContactForm";
import ContactForm from "./ContactForm"

const CreateContactForm = ({ saveContact }) => {
  const { form, handleChange, handleSubmit } = useCreateContactForm(
    {
      saveContact
    }
  );

  return (
    <ContactForm
      form={form}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      submitLabel="Create"
    />
  );
};

export default CreateContactForm;
