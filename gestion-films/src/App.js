// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchPage from './components/searchPage';
import MovieDetailPage from './components/movieDetailPage';
import './App.css';

const App = () => (
  <Router>
    <div className="app">
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/movie/:id" element={<MovieDetailPage />} />
      </Routes>
    </div>
  </Router>
);

export default App;
