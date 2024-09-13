import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to my website!</h1>
      <nav style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
        <Link to="/" style={{ margin: '0 50px' }}><h3>Home</h3></Link>
        <Link to="/blogs" style={{ margin: '0 50px' }}><h3>Blogs</h3></Link>
        <Link to="/about" style={{ margin: '0 50px' }}><h3>About</h3></Link>
        <Link to="/projects" style={{ margin: '0 50px' }}><h3>Projects</h3></Link>
        <Link to="/writing" style={{ margin: '0 50px' }}><h3>Writing</h3></Link>
      </nav>
    </div>
  );
}

export default Header;