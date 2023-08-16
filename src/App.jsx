import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './views/HomePage';
import Login from './views/Login.jsx';
import Signup from './views/Signup.jsx';
import Navigation from './components/Navigation.jsx';
import EventForm from './views/EventForm.jsx';
import { ChakraProvider } from "@chakra-ui/react";


function App() {
  return (
    <ChakraProvider>
      <div style={{ width: '100%' }}>
        <Navigation />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/addevent" element={<EventForm />} />
        </Routes>
      </div>
    </ChakraProvider>
  );
}

export default App;