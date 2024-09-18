import React from 'react';
import { useNavigate } from 'react-router-dom';
import spaceBackground from '../content/Images/space.jpg';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div style={{
      backgroundImage: `url(${spaceBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      textAlign: 'center',
      padding: '20px',
      boxSizing: 'border-box',
    }}>
      <h1 style={{
        fontSize: '3rem',
        marginBottom: '20px',
      }}>
        Welcome to My Site!
      </h1>
      <p style={{
        fontSize: '1.2rem',
        maxWidth: '600px',
      }}>
        This is my personal website just to host some projects and develop my web dev skills.
      </p>
      <div style={{
        display: 'flex',
        gap: '20px',
        marginTop: '40px',
      }}>
        {[
          { name: 'Home', path: '/' },
          { name: 'Blogs', path: '/blogs' },
          { name: 'About', path: '/about' },
          { name: 'Projects', path: '/projects' },
          { name: 'Writing', path: '/writing' }
        ].map((section) => (
          <button
            key={section.name}
            onClick={() => handleNavigation(section.path)}
            style={{
              padding: '10px 20px',
              fontSize: '1rem',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              border: '2px solid white',
              color: 'white',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
            }}
          >
            {section.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;