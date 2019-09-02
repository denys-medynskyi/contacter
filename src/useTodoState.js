import { useState } from 'react';
// TODO: extract firebase to separate file
// firebase
var firebaseConfig = {
    apiKey: "AIzaSyD_KZSw600SvlzT9v5TnjD6hk9Ud1HT290",
    authDomain: "contacter-40edf.firebaseapp.com",
    databaseURL: "https://contacter-40edf.firebaseio.com",
    projectId: "contacter-40edf",
    storageBucket: "contacter-40edf.appspot.com",
    messagingSenderId: "10381421719",
    appId: "1:10381421719:web:6c9b1559c1c22bcf"
}
var firebase = require("firebase");
require("firebase/database");
const database = firebase.initializeApp(firebaseConfig).firestore();

export default (initialValue) => {
  const [todos, setTodos] = useState(initialValue);

  return {
    todos,
    addTodo: (todoText) => {
      setTodos([...todos, todoText]);
      database.collection("todos").add({
        title: todoText
      });
    },
    deleteTodo: (todoIndex) => {
      const todosAfterRemoval = todos.filter(
        (_, index) => index !== todoIndex
      );

      setTodos(todosAfterRemoval);
    }
  };
};
