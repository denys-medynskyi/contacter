import { useState } from 'react';
import database from "./database";

export default (initialState) => {
  const [todos, setTodos] = useState(initialState);

  database.listTodos().then((todos) => {
    setTodos(todos);
  })

  return {
    todos,
    addTodo: todoText => {
      let newTodo = { uid: todoText, title: todoText };
      setTodos([...todos, newTodo]);

      database.addTodo(newTodo);
    },
    deleteTodo: uid => {
      const todosAfterRemoval = todos.filter(todo => todo.uid !== uid);

      setTodos(todosAfterRemoval);
    }
  };
};
