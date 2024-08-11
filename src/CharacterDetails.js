import React from "react";

function CharacterDetails({ character, quotes, onBackClick }) {
  return (
    <div className="character-details">
      <button onClick={onBackClick}>Back to Characters</button>
      <img className="character-image" src={character.img} alt={`${character.firstname} ${character.lastname}`} />
      <h2>{character.firstname} {character.lastname}</h2>
      <h3>Quotes:</h3>
      <ul>
        {quotes.map((quote, index) => (
          <li key={index}>{quote.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default CharacterDetails;