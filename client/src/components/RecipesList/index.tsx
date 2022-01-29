import React, { useState, useEffect } from 'react';
import { RecipeProps } from '../../types';
import RecipeItem from '../RecipeItem';
import "./styles.css";

const RecipesList = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/recipes")
      .then((res) => res.json())
      .then((data) => setData(data.recipes));
  }, []);

  return (
    <div className="list-wrapper">
      {!data ? "Loading..." : data.map((recipe: RecipeProps) => <RecipeItem {...recipe} />)}
    </div>
  )
}

export default RecipesList;