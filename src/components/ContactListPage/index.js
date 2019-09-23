import React, { Component } from 'react'
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { compose } from "recompose";
import { withFirebase } from 'components/Firebase';
import { withAuthUser } from "components/Session";
import { Link } from "react-router-dom";

class ContactListPage extends Component {
  constructor(props) {
    super(props);

    this.authUser = this.props.authUser;

    this.state = {
      loading: false,
      contacts: []
    }
  }

  componentDidMount() {
    this.setState({loading: true});

    this.props.firebase.listContacts(this.authUser.uid).then(contacts => {
      this.setState({ contacts, loading: false });
    });
  }

  deleteContact(id) {
    const contactsAfterRemoval = this.state.contacts.filter(
      contact => contact.id !== id
    );

    this.setState({contacts: contactsAfterRemoval})
    this.props.firebase.deleteContact(id);
  }

  render () {
    const { contacts, loading } = this.state;

    return (
      <React.Fragment>
        {loading && <div>Loading ...</div>}

        <List>
          {contacts.map(contact => (
            <ListItem key={contact.id} dense button>
              <ListItemText>
                {contact.name}, from {contact.location}
              </ListItemText>
              <ListItemSecondaryAction>
                <Link to={`/contacts/${contact.id}/edit`}>
                  <IconButton aria-label="Edit">
                    <EditIcon />
                  </IconButton>
                </Link>

                <IconButton
                  aria-label="Delete"
                  onClick={() => {
                    this.deleteContact(contact.id);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </React.Fragment>
    );
  }
};

export default compose(withAuthUser, withFirebase)(ContactListPage);
