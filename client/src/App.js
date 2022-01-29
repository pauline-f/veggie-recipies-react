import React from "react";
import AppTitle from "./components/AppTitle";
import RecipesList from "./components/RecipesList";
import { Routes, Route } from "react-router-dom";
import RecipeDetails from "./components/RecipeDetails";
import Home from "./components/Home";
import NavBar from "./NavBar";

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
      </Routes>
    </div>
  );
}

export default App;
