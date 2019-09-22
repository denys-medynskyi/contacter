import React, { Component } from "react";
import ContactForm from "components/ContactForm";
import { withFirebase } from "components/Firebase";

class ContactEditPage extends Component {
  constructor(props) {
    super(props);

    this.contactId = this.props.match.params.id;
    this.database = this.props.firebase;

    this.state = {
      loading: false,
      contact: {
        name: "",
        location: ""
      }
    }
  }

  componentDidMount() {
    this.setState({loading: true});

    this.database.loadContact(this.contactId).then(contact => {
      this.setState({ contact, loading: false });
    });
  }

  handleChange = event => {
    event.persist();

    this.setState({
      contact: { ...this.state.contact, [event.target.name]: event.target.value }
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.database.updateContact(this.state.contact);
  }

  render() {
    return (
      <ContactForm
        form={this.state.contact}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        submitLabel="Update"
      />
    );
  }
};

export default withFirebase(ContactEditPage);
