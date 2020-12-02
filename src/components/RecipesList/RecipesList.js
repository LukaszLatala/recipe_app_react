import React from "react";
import Recipe from "../Recipe/Recipe";

const RecipesList = (props) => {
  return (
    <ul>
      {props.recipes.map((el) => {
        const { id, title, image, readyInMinutes, servings } = el;
        return (
          <li key={id}>
            <Recipe
              title={title}
              image={image}
              readyInMinutes={readyInMinutes}
              servings={servings}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default RecipesList;
