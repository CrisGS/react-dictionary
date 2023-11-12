import React, { useState } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import SearchWordSection from './components/SearchWordSection.jsx';

function App() {
  const [setWordData] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <div className="Panel-section">
          <SearchWordSection setWordData={setWordData} />
        </div>
      </main>
    </div>
  );
}

export default App;