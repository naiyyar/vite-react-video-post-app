import react from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import NavBar from './components/routes/NavBar';
import AppRoutes from './components/routes/AppRoutes';

function App() {

  return (
    <Router>
      <h1>React on Rails Blogs</h1>
      <NavBar />
      <AppRoutes />
    </Router>
  )
}

export default App
