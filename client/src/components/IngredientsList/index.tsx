import React from 'react';
import { RecipeProps } from '../../types';
import IngredientDetails from '../IngredientDetails';

const IngredientsList = (props: RecipeProps) => {
  const { ingredients } = props

  return (
    <div>
      <h4>Ingrédients</h4>
      <ul>{ingredients.map(ingredient => <IngredientDetails {... ingredient} />)}</ul>
    </div>
  )
}

export default IngredientsList;