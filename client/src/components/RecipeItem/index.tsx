import React from 'react';
import { RecipeProps } from '../../types';
import { Link } from "react-router-dom";
import "./styles.css";

const RecipeItem = (props: RecipeProps) => {
  const { image, name, id } = props

  return (
    <div className="wrapper">
      <Link className="link" to={`/recipes/${id}`}><img src={image} alt={name} className="image" /><p className="title-recipe">{name}</p></Link>
    </div>
  )
}

export default RecipeItem;