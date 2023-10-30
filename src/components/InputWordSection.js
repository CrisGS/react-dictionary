import React from 'react';
import '../assets/inputSection.css';

function InputWordSection() {
    return (
        <section className="Input-section">
            <fieldset className="Input-field">
                <legend><strong>Enter a word</strong></legend>
                <input className="inputBox" type="text" placeholder="Type your word..." />
                <button>Add</button>
            </fieldset>
        </section>
    );
}

export default InputWordSection;