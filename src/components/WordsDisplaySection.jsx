import React from 'react';
import '../assets/displaySection.css';
//import '../assets/wordsList.css';

function WordsDisplaySection({ searchResult }) {
    console.log(searchResult);
    return (
        <section className="Display-section">
            <ul className="Words-list scrollable">
                {searchResult && (
                    <li>
                        <h2>Word: {searchResult.word}</h2>
                        {searchResult.meanings.map((meaning, index) => (
                            <div key={index}>
                                <h3>Part of Speech: {meaning.partOfSpeech}</h3>
                                {meaning.definitions.map((definition, index) => (
                                    <div key={index}>
                                        <p>Definition: {definition.definition}</p>
                                        {definition.example && <p>Example: {definition.example}</p>}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </li>
                )}
            </ul>
        </section>
    );
}

export default WordsDisplaySection;
