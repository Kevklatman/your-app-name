import React, { useState } from "react";
import data from './db.json';
import Search from "./Search";

function Body() {
  const characters = data.characters;
  return (
    <div>
      <h2>Characters</h2>
      <Search />
      <div className="image-grid">
        {characters.map((character) => (
          <div key={character._id}>
            <button className="button-image" onClick={handleClick}>          
                <img className='image' src={character.img} alt={`${character.firstname} ${character.lastname}`} />
            </button>
            <p>{character.firstname} {character.lastname}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Body;