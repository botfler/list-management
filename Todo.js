// src/components/Todo.js

import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Todo = () => {
  const [todos, setTodos] = useState([]);  // Store all todos as an array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Define specific IDs you want to display
  const specificIds = [1, 2, 3, 4,5,6,7,8,9,10];  // Example IDs to filter

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(data => {
        // Filter the todos to only include those with specific IDs
        const filteredTodos = data.filter(todo => specificIds.includes(todo.id));
        setTodos(filteredTodos);  // Store filtered data in the todos state
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><h1>First List </h1></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  LIST
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/about">11 TO 20</Link></li>
                <li><Link className="dropdown-item" to="/another">21 TO 30</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Get entry" aria-label="Search" />
              <button className="btn btn-outline-warning" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      <div className="container mt-5">
        {loading ? (
          <div className="loading">Loading...</div>
        ) : error ? (
          <div className="error">Error: {error}</div>
        ) : todos.length > 0 ? (
          <>
            <h1 style={{backgroundColor:'black',textAlign:'center',color:'white'}}>FIRST 10 LIST</h1>
            <table className="table table-striped table-hover">
              <thead className="table-dark">
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Completed</th>
                </tr>
              </thead>
              <tbody>
                {todos.map(todo => (
                  <tr key={todo.id}>
                    <td>{todo.id}</td>
                    <td>{todo.title}</td>
                    <td className={todo.completed ? 'completed-yes' : 'completed-no'}>
                      {todo.completed ? 'Yes' : 'No'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <div className="no-data">No data available.</div>
        )}
      </div>
    </div>
  );
};

export default Todo;
