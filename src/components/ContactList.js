import React from 'react'
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Link as RouteLink } from "@reach/router";

const ContactList = ({ contacts, deleteContact }) => (
  <List>
    {contacts.map(contact => (
      <ListItem key={contact.id} dense button>
        <ListItemText>
          {contact.name}, from {contact.location}
        </ListItemText>
        <ListItemSecondaryAction>
          <RouteLink to={`/contacts/${contact.id}/edit`}>
            <IconButton aria-label="Edit">
              <EditIcon />
            </IconButton>
          </RouteLink>

          <IconButton
            aria-label="Delete"
            onClick={() => {
              deleteContact(contact.id);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ))}
  </List>
);

export default ContactList;
