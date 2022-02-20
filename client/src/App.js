import React from "react";
import AppTitle from "./components/AppTitle";
import RecipesList from "./components/RecipesList";
import { Routes, Route } from "react-router-dom";
import RecipeDetails from "./components/RecipeDetails";
import ShoppingList from "./components/ShoppingList";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

const App = () => {

  return (
    <div>
      <header>
        <AppTitle />
      </header>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<RecipesList />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        <Route path="/shopping-list" element={<ShoppingList />} />
      </Routes>
    </div>
  );
}

export default App;
