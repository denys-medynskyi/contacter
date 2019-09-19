import React from "react";
import useCreateContactForm from "../useState/useCreateContactForm";
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
