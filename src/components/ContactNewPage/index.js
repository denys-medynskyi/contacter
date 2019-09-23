import React, { Component } from "react";
import ContactForm from "components/ContactForm";
import { compose } from "recompose";
import { withFirebase } from "components/Firebase";
import { withAuthUser } from "components/Session";

class ContactNewPage extends Component {
  constructor(props) {
    super(props);

    this.database = this.props.firebase;
    this.authUser = this.props.authUser;

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
    const user_uid = this.props.authUser.uid
    this.database.addContact({ ...this.state.contact, user_uid: user_uid });
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

export default compose(withAuthUser, withFirebase)(ContactNewPage);
