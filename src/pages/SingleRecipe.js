import React from "react";
//rafce ---> snippet
const SingleRecipe = (props) => {
  console.log(props);
  const {
    recipeImage,
    baseUrl,
    recipeTitle,
    readyInMinutes,
    servings,
  } = props.location.state;
  return (
    <div>
      <h1>Single Recipe</h1>
      <p> {recipeTitle}</p>
      <p style={{ color: "black" }}> Czas przygotowania to: {readyInMinutes}</p>
      <p style={{ color: "black" }}> Ilość osób: {servings}</p>

      <br />
      <p style={{ color: "black" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, facere
        at. Quisquam, recusandae? Molestiae, sapiente. Officia quod assumenda
        voluptatum voluptas enim numquam iusto fugit omnis blanditiis.
        Exercitationem earum pariatur tempore. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Veniam, facere at. Quisquam, recusandae?
        Molestiae, sapiente. Officia quod assumenda voluptatum voluptas enim
        numquam iusto fugit omnis blanditiis. Exercitationem earum pariatur
        tempore.
      </p>
      <img
        style={{ width: "800px", height: "800px", margin: "10px" }}
        src={`${baseUrl}${recipeImage}`}
        alt={recipeTitle}
      />
      {/* <p>{props.location.state.recipeTitle}</p> */}
    </div>
  );
};

export default SingleRecipe;
