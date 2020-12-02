import React from "react";
import { Link } from "react-router-dom";

const Recipe = (props) => {
  const { title, image, readyInMinutes, servings } = props;
  return (
    <>
      <p>{title}</p>
      <p style={{ color: "black" }}>
        <bold>Czas przygotowania:</bold> {readyInMinutes} minut
      </p>

      <Link
        to={{
          pathname: `/recipes/${title.replace(/\s/g, "")}`,
          //Nie mylić ze stanem aplikacji/klasowym, TO JEST STAN LINKU ---> czyli to co link ze sobą przywiezie
          state: {
            recipeTitle: title,
            recipeImage: image,
            baseUrl: "https://spoonacular.com/recipeImages/",
            readyInMinutes,
            servings,
          },
        }}
      >
        <img
          src={`https://spoonacular.com/recipeImages/${image}`}
          alt={title}
          style={{ width: "300px", height: "300px" }}
        />
      </Link>
    </>
  );
};

export default Recipe;
