// Body.js
import React, { useState } from "react";
import data from './db.json';
import Search from "./Search";
import CharacterDetails from "./CharacterDetails";

function Body({ characterQuotes }) {
  const characters = data.characters;
  const [hoveredQuote, setHoveredQuote] = useState("");
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const getRandomQuote = (characterId) => {
    const quotes = characterQuotes[characterId];
    if (quotes && quotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setHoveredQuote(quotes[randomIndex].content);
    } else {
      setHoveredQuote("");
    }
  };

  const handleCharacterClick = (character) => {
    setSelectedCharacter(character);
  };

  if (selectedCharacter) {
    return (
      <CharacterDetails
        character={selectedCharacter}
        quotes={characterQuotes[selectedCharacter._id] || []}
        onBackClick={() => setSelectedCharacter(null)}
      />
    );
  }

  return (
    <div>
      <h2>Characters</h2>
      <Search />
      <div className="image-grid">
        {characters.map((character) => (
          <div key={character._id} className="character-card">
            <div className="image-container">
              <button onClick={() => handleCharacterClick(character)}>
                <img
                  className="img"
                  src={character.img}
                  alt={`${character.firstname} ${character.lastname}`}
                  onMouseEnter={() => getRandomQuote(character._id)}
                  onMouseLeave={() => setHoveredQuote("")}
                />
              </button>
              {hoveredQuote && <div className="quote-tooltip">{hoveredQuote}</div>}
            </div>
            <p>{character.firstname} {character.lastname}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Body;