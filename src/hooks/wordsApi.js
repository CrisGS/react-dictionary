let wordDefinition = [];

async function searchWord(searchedWord) {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchedWord}`;

    try {
        const response = await fetch(url);
        wordDefinition = await response.json();
        console.log(wordDefinition);
    } catch (error) {
        console.error(error);
    }
}

export default searchWord;
