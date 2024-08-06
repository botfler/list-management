// src/context/TodoContext.js

import React, { createContext, useState, useEffect } from 'react';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(data => setTodos(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <TodoContext.Provider value={todos}>
      {children}
    </TodoContext.Provider>
  );
};
