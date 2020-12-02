import React from "react";

const RecipeSearchForm = (props) => {
  return (
    <form onSubmit={props.getRecipes}>
      <input type="search" name="searchRecipe" placeholder="Search recipe..." />
      <label htmlFor="recipeNumber">Choose number of recipes</label>
      <select name="recipeNumber" id="recipeNumber">
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={30}>30</option>
        <option value={50}>50</option>
      </select>
      <button type="submit">Search</button>
    </form>
  );
};

export default RecipeSearchForm;
