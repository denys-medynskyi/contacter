import React, { Component } from "react";
import ContactForm from "components/ContactForm";
import { withFirebase } from "components/Firebase";

class ContactNewPage extends Component {
  constructor(props) {
    super(props);

    this.database = this.props.firebase;

    this.state = {
      loading: false,
      contact: {
        name: "",
        location: ""
      }
    };
  }

  handleChange = event => {
    event.persist();

    this.setState({
      contact: {
        ...this.state.contact,
        [event.target.name]: event.target.value
      }
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.database.addContact(this.state.contact);
  };

  render() {
    return (
      <ContactForm
        form={this.state.contact}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        submitLabel="Create"
      />
    );
  }
}

export default withFirebase(ContactNewPage);
