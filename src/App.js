import React from 'react';
import './App.css';
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import useTodoState from "./useTodoState";
import { Router } from "@reach/router";
import NavBar from "./NavBar";

function App() {
  const { todos, addTodo, deleteTodo } = useTodoState([]);

  return (
    <div className="App">
      <NavBar />
      <Router>
        <TodoList path="/" todos={todos} deleteTodo={deleteTodo} />
        <TodoForm
          path="/todos/new"
          saveTodo={todoText => {
            const trimmedText = todoText.trim();

            if (trimmedText.length > 0) {
              addTodo(trimmedText);
            }
          }}
        />
      </Router>
    </div>
  );
}

export default App;
