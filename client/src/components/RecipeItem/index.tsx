import React from 'react';
import { RecipeProps } from '../../types';
import { Routes, Route, Link } from "react-router-dom";
import RecipeDetails from '../RecipeDetails';

const RecipeItem = (props: RecipeProps) => {
  const { image, name, id } = props

  return (
    <div style={{ display: 'flex', padding: 3 }}>
      <Link to={`/recipes/${id}`}><img src={image} alt={name} style={{ width: 80, height: 80 }} /><p>{name}</p></Link>
    </div>
  )
}

export default RecipeItem;