import logo from './logo.svg';
import NavBar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import LoginPage from './pages/Login';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LoginPage />}/>
        <Route path="/home" element={<HomePage />}/>
      </Routes>
    </>
  );
}

export default App;