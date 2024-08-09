import React, { useState } from "react";
import data from './db.json';
import Search from "./Search";

function Body() {
  const characters = data.characters;
  const [hoveredQuote, setHoveredQuote] = useState(""); // State to hold the quote of the hovered character

  // Function to find a random quote for a given character
  const getRandomQuote = (characterId) => {
    const quotes = data.quotes.filter(quote => quote.character._id === characterId);
    if (quotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setHoveredQuote(quotes[randomIndex].content); // Update the state with a random quote
    } else {
      setHoveredQuote(""); // No quotes found for this character
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
