import { useState } from 'react';

export default (initialValue) => {
  const [todos, setTodos] = useState(initialValue);

  return {
    todos,
    addTodo: (todoText) => {
      setTodos([...todos, todoText]);
    },
    deleteTodo: (todoIndex) => {
      const todosAfterRemoval = todos.filter(
        (_, index) => index !== todoIndex
      );

      setTodos(todosAfterRemoval);
    }
  };
};
