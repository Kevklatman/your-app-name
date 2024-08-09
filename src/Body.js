import React, { useState } from "react";
import data from './db.json';
import Search from "./Search";

function Body({characterQuotes}) {
  const characters = data.characters;
  const [hoveredQuote, setHoveredQuote] = useState("");
  
  const getRandomQuote = (characterId) => {
    const quotes = characterQuotes[characterId];
    if (quotes && quotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setHoveredQuote(quotes[randomIndex].content);
    } else {
      setHoveredQuote("");
    }
  };

  return (
    <div>
      <h2>Characters</h2>
      <Search />
      <div className="image-grid">
        {characters.map((character) => (
          <div key={character._id} className="character-card" onMouseEnter={() => getRandomQuote(character._id)} onMouseLeave={() => setHoveredQuote("")}>
            <div className="image-container">
              <img className='img' src={character.img} alt={`${character.firstname} ${character.lastname}`} />
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
