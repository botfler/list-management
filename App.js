// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Todo from './Todo';
import About from './About';
import Another from './Another'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/about" element={<About />} />
        <Route path="/another" element={<Another />} />
      </Routes>
    </Router>
  );
};

export default App;
