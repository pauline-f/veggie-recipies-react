import React from "react";
import AppTitle from "./components/AppTitle";
import RecipesList from "./components/RecipesList";
import { Routes, Route } from "react-router-dom";
import RecipeDetails from "./components/RecipeDetails";

const App = () => {

  return (
    <div>
      <header>
        <AppTitle />
      </header>
      <Routes>
        <Route path="/" element={<RecipesList />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
}

export default App;
