import React, { Component } from "react";
import ContactForm from "components/ContactForm";
import { compose } from "recompose";
import { withFirebase } from "components/Firebase";
import { withAuthUser, withAuthorization } from "components/Session";

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
      },
      error: ""
    };

  }

  handleChange = event => {
    event.persist();

    const inputValue = event.target.value;
    const inputName = event.target.name;

    if (inputValue === "") {
      this.setState({ error: `${inputName}: can not be blank` });
    } else {
      this.setState({ error: "" });
    }

    this.setState({
      contact: {
        ...this.state.contact,
        [inputName]: inputValue
      }
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const user_uid = this.props.authUser.uid;
    this.database.addContact({ ...this.state.contact, user_uid: user_uid });
  };

  render() {
    return (
      <ContactForm
        form={this.state.contact}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        error={this.state.error}
        submitLabel="Create"
      />
    );
  }
}

const condition = authUser => !!authUser;

const authorizedPage = withAuthorization(condition)(ContactNewPage);

export default compose(
  withAuthUser,
  withFirebase
)(authorizedPage);
