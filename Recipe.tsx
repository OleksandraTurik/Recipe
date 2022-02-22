import React from 'react';

const Recipe = ({ title, calories, url, ingredients }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{calories}</p>
      <div>
        {ingredients.map((el, index) => (
          <p key={index}>{el}</p>
        ))}
      </div>

      <img src={url} alt={title} />
    </div>
  );
};

export default Recipe;
