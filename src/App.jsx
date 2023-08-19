import React, { useState } from 'react';
import { Routes, Route, Navigate, useNavigate  } from 'react-router-dom';
import HomePage from './views/HomePage';
import Login from './views/Login.jsx';
import Signup from './views/Signup.jsx';
import Navigation from './components/Navigation.jsx';
import EventForm from './views/EventForm';
import EventDetails from './views/EventDetails';
import { ChakraProvider } from "@chakra-ui/react";
import { SearchProvider } from './components/SearchContext';
import { AuthProvider, useAuth } from './components/AuthContext';


function App() {
  const navigate = useNavigate();
  const [lastIntendedPath] = useState('/home');

  function ProtectedRouteWrapper() {
    const { isAuthenticated } = useAuth();

    if (isAuthenticated) {
        return <EventForm />;
    } else {
        return <Navigate to="/login" />;
    }
}

  function handleLoginSuccess() {
    navigate(lastIntendedPath); //after login go to last intended page
  }

  return (
    <ChakraProvider>
      <AuthProvider>
      <SearchProvider>
      <div style={{ width: '100%' }}>
        <Navigation />
        <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<Login onSuccess={handleLoginSuccess} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/addevent" element={<ProtectedRouteWrapper />} />
          <Route path="/event/:id" element={<EventDetails />} />
        </Routes>
      </div>
      </SearchProvider>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
