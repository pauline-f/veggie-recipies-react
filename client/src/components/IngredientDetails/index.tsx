import React from 'react';
import { IngredientsProps } from '../../types';

const IngredientDetails = (props: IngredientsProps) => {
  const { name, nb, volume } = props

  return (
    <li>{nb} {volume} {name}</li>
  )
}

export default IngredientDetails;