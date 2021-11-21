import React from 'react';
import { RecipeProps } from '../../types';

const RecipeItem = (props: RecipeProps) => {
  const recipeImage = props.image
  const recipeName = props.name

  return (
    <div style={{display: 'flex', padding: 3}}>
      <img src={recipeImage} alt={recipeName} style={{width: 80, height: 80}} /><p>{recipeName}</p>      
    </div>
  )
}

export default RecipeItem;