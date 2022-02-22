import React, { useCallback, useEffect, useState } from 'react';
import Recipe from './Recipe';

const App = () => {
  const APP_ID = '05ee4760';
  const APP_KEY = 'bed80e643616fa6e8403f45658c2baed';
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    getRecipes(query);
  }, [query]);
  console.log(query);

  const getRecipes = async (querySearch) => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${querySearch}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setQuery(search);
    },
    [search]
  );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Click me </button>
      </form>
      {recipes.map((el, index) => (
        <Recipe
          key={index}
          title={el.recipe.label}
          calories={el.recipe.calories | 0}
          url={el.recipe.image}
          ingredients={el.recipe.ingredientLines}
        />
      ))}
    </div>
  );
};

export default App;
