import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import { BrowserRouter as Router, Routes, Route, Link }  from 'react-router-dom';
import Contact from './pages/Contact';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Router>
          <div>
            <ul>
              <il>
                <Link to="/">Home</Link>
              </il>
              <il>
                <Link to="/contact">Contacto</Link>
              </il>
              <il>
                <Link to="/profile">Profile</Link>
              </il>
            </ul>
          </div>
          <Routes>
            <Route path="/" element={<Welcome message="Hola welcome props" name="Sergio" />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile/:name" element={<Profile />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
