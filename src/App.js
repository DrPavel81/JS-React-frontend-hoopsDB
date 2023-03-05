import React from 'react';
import MainComponent from './MainComponent';

function App() {
  const gradientBackground = {
    background: 'linear-gradient(to right, MidnightBlue, Brown)',
    color: 'White'
  };

  return (
    <div className="App" style={gradientBackground}>
      <MainComponent />
    </div>
  );
}

export default App;