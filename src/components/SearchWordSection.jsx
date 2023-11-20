import React, { useState } from 'react';
import WordsDisplaySection from './WordsDisplaySection';
import '../assets/searchSection.css';

function SearchWordSection() {
    const [searchedWord, setSearchedWord] = useState('');
    const [searchResult, setSearchResult] = useState(null);

    async function searchWord(searchedWord) {
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchedWord}`;
        try {
            const response = await fetch(url);
            const word = await response.json();
            return word[0];
        } catch (error) {
            throw error;
        }
    }

    const handleSearch = async () => {
        try {
            const response = await searchWord(searchedWord);
            if (response) {
                setSearchResult(response);
            } else {
                setSearchResult(null);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <section className="Search-section">
            <fieldset className="search-field">
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
            {searchResult && <WordsDisplaySection searchResult={searchResult} />}
        </section>
    );
}

export default SearchWordSection;