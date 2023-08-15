import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './views/HomePage';
import Login from './views/Login.jsx';
import Signup from './views/Signup.jsx';
import Navigation from './components/Navigation.jsx';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;