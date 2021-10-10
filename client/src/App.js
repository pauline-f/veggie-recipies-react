import React from "react";
import AppTitle from "./components/AppTitle";
import RecipesList from "./components/RecipesList";

const App = () => {

  return (
    <div>
      <header>
        <AppTitle />
        <RecipesList />
      </header>
    </div>
  );
}

export default App;
