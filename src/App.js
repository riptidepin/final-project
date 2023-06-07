import React from 'react';
import NavBar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import LoginPage from './pages/Login';
import ProfilePage from './pages/Profile';
import RegistrationPage from './pages/Registration';
import CompletedPage from './pages/Completed';
import FavoritesPage from './pages/Favorites';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/completed" element={<CompletedPage />} /> 
        <Route path="/favorites" element={<FavoritesPage />} /> 
      </Routes>
    </>
  );
}

export default App;
