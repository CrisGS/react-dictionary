import React, { useState } from 'react';
import WordsDisplaySection from './WordsDisplaySection';
import '../assets/searchSection.css';

function SearchWordSection() {
    const [searchedWord, setSearchedWord] = useState('');
    const [searchResult, setSearchResult] = useState(null); // New state for search result

    async function searchWord(searchedWord) {
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchedWord}`;
        try {
            const response = await fetch(url);
            const word = await response.json();
            return word[0];
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    const handleSearch = async () => {
        try {
            const response = await searchWord(searchedWord);
            if (response) {
                setSearchResult(response);
            } else {
                // Cuvântul nu a fost găsit, puteți trata acest caz aici
                setSearchResult(null); // Clear previous search result on failure
            }
        } catch (error) {
            // Tratați erorile aici
            console.error("Error:", error);
        }
    };

    return (
        <section className="Search-section">
            <fieldset className="search-field">
                <legend><strong>Search a word</strong></legend>
                <input
                    className="searchInput"
                    type="text"
                    id="searchedWord"
                    placeholder="Search..."
                    value={searchedWord}
                    onChange={(e) => setSearchedWord(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </fieldset>
            
            {/* Render WordsDisplaySection conditionally based on searchResult */}
            {searchResult && <WordsDisplaySection searchResult={searchResult} />}
        </section>
    );
}

export default SearchWordSection;