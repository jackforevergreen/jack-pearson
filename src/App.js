import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Writing from './pages/Writing';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/jack-pearson" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/writing" element={<Writing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;