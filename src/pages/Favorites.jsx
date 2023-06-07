import React from 'react';

const FavoritesPage = () => {
  const pageStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
  };

  const headingStyles = {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '2rem',
  };

  const textStyles = {
    fontSize: '1.2rem',
    color: '#777',
    textAlign: 'center',
    maxWidth: '600px',
    padding: '0 1rem',
  };

  return (
    <div style={pageStyles}>
      <h1 style={headingStyles}>Your Favorites</h1>
      <p style={textStyles}>
        The user's favorites will be added to this page if there is a backend. Unfortunately, it will not work here since this is only a front end :(
      </p>
    </div>
  );
};

export default FavoritesPage;
