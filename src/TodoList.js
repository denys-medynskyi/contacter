import React from 'react'
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const TodoList = ({ todos, deleteTodo }) => (
  <List>
    {todos.map((todo) => (
      <ListItem key={todo.id} dense button>
        <Checkbox tabIndex={-1} disableRipple />
        <ListItemText primary={todo.title} />
        <ListItemSecondaryAction>
          <IconButton
            aria-label="Delete"
            onClick={() => {
              deleteTodo(todo.id);
            }}
            >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ))}
  </List>
)

export default TodoList;
