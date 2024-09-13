import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Home from './pages/Home';
import Projects from './pages/Project';
import Writing from './pages/Writing';


const App = () => {
  return (
    <Router>
      <div style={{
        fontFamily: '"Times New Roman", Times, serif',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <header style={{
          backgroundColor: '#f0f0f0',
          padding: '20px 0',
          textAlign: 'center'
        }}>
          <h1 style={{
            fontSize: '36px',
            marginBottom: '20px'
          }}>
            Welcome to my website!
          </h1>
          <nav style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '40px'
          }}>
            <Link to="/" style={linkStyle}>Home</Link>
            <Link to="/blogs" style={linkStyle}>Blogs</Link>
            <Link to="/about" style={linkStyle}>About</Link>
            <Link to="/projects" style={linkStyle}>Projects</Link>
            <Link to="/writing" style={linkStyle}>Writing</Link>
          </nav>
        </header>
        <main style={{
          flex: 1,
          padding: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/writing" element={<Writing />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

const linkStyle = {
  fontSize: '20px',
  color: '#000',
  textDecoration: 'none'
};

export default App;