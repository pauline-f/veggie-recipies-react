import React, { useState, useEffect } from 'react';
import { RecipeProps } from '../../types';
import RecipeItem from '../RecipeItem';

const RecipesList = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/recipes")
      .then((res) => res.json())
      .then((data) => setData(data.recipes));
  }, []);

  return (
    <div style={{display: 'flex', flexDirection: 'column', padding: 3}}>
      {!data ? "Loading..." : data.map((recipe: RecipeProps) => <RecipeItem {...recipe} />)}
    </div>
  )
}

export default RecipesList;