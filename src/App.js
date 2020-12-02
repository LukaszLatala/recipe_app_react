import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { apiKey } from "./api/apiKey";
import RecipeSearchForm from "./components/RecipeSearchForm/RecipeSearchForm";
import RecipesList from "./components/RecipesList/RecipesList";

class App extends Component {
  state = {
    recipes: [],
  };

  getRecipes = (e) => {
    e.preventDefault();

    console.log(e.target.searchRecipe.value);

    const recipeName = e.target.searchRecipe.value;
    const recipeNumber = e.target.recipeNumber.value;

    axios
      .get(
        `https://api.spoonacular.com/recipes/search?apiKey=${apiKey}&query=${recipeName}&number=${recipeNumber}`
      )
      .then((response) => {
        this.setState({
          recipes: [...response.data.results],
        });
        console.log(response);
      })
      .catch((err) => console.log(err));

    e.target.reset();
  };

  render() {
    return (
      <div className="App">
        <h1>Recipe App</h1>
        <RecipeSearchForm getRecipes={this.getRecipes} />
        <RecipesList recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
