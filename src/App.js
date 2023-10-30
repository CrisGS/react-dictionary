import './App.css';
import Header from './components/Header.js';
import InputWordSection from './components/InputWordSection.js';
import SearchWordSection from './components/SearchWordSection.js';
import WordsDisplaySection from './components/WordsDisplaySection.js';
import searchWord from './hooks/wordsApi';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <div className="Panel-section">
          <InputWordSection />
          <SearchWordSection />
        </div>
        <WordsDisplaySection />
      </main>
    </div>
  );
}

export default App;
