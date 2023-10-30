import React from 'react';
import '../assets/searchSection.css';
import searchWord from '../hooks/wordsApi';

function SearchWordSection() {
    return (
        <section className="Search-section">
            <fieldset className="search-field">
                <legend><strong>Search a word</strong></legend>
                <input className="inputBox" type="text" id="searchedWord" placeholder="Search..." />
                <button >Search</button>
            </fieldset>
        </section>
    );
}

export default SearchWordSection;