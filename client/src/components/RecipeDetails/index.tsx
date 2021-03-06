import React, { useEffect, useState } from 'react';
import { RecipeProps } from '../../types';
import { useParams } from "react-router-dom";
import IngredientsList from '../IngredientsList';
import InstructionsList from '../InstructionsList';

const RecipeDetails = () => {

  const [recipe, setRecipe] = useState();

  const id = useParams().id;

  useEffect(() => {
    fetch(`/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => setRecipe(data))
  }, []);

  if (!recipe) return null

  const recipeDetails: RecipeProps = recipe

  return (
    <div>
      <h2>{recipeDetails.name}</h2>
      <IngredientsList {...recipeDetails} />
      <InstructionsList {...recipeDetails} />
    </div>
  )
}

export default RecipeDetails;