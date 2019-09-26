import React from 'react'
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { compose } from "recompose";
import { withFirebase } from 'components/Firebase';
import { withAuthUser, withAuthorization } from "components/Session";
import { Link } from "react-router-dom";
import { useFetchContacts } from "hooks/useFetchContacts";

const ContactListPage = ({ authUser, firebase }) => {
  const userUid = authUser.uid;
  const { contacts, loading, error } = useFetchContacts({ firebase, userUid });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <React.Fragment>
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
};

const condition = authUser => !!authUser;

const authorizedPage = withAuthorization(condition)(ContactListPage);

export default compose(
  withAuthUser,
  withFirebase
)(authorizedPage);
