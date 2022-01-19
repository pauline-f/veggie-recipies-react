import React from 'react';
import { IngredientsProps } from '../../types';

const IngredientDetail = (props: IngredientsProps) => {
  const { name, nb, volume } = props

  return (
    <ul>
      <li>{nb} {volume} {name}</li>
    </ul>
  )
}

export default IngredientDetail;