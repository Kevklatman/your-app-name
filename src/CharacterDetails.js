// CharacterDetails.js
import React from "react";

function CharacterDetails({ character, quotes, onBackClick }) {
  return (
    <div>
      <button onClick={onBackClick}>Back to Characters</button>
      <div className="character-details">
        <img className="character-image" src={character.img} alt={`${character.firstname} ${character.lastname}`} />
        <h2>{character.firstname} {character.lastname}</h2>
        <h3>Quotes:</h3>
        <ul>
          {quotes.map((quote, index) => (
            <li key={index}>{quote.content}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CharacterDetails;