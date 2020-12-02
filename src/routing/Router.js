import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Navbar from "../components/navigations/Navbar";
import SingleRecipe from "../pages/SingleRecipe";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/recipes/:title" component={SingleRecipe} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
