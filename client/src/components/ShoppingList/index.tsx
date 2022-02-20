import React, { useState } from 'react';

const ShoppingList = () => {
  const [list, setList] = useState(['']);
  const [ingredient, setIngredient] = useState('');

  const addIngredient = () => {
    setList([ingredient, ...list]);
    setIngredient('');
  }

  return (
    <div>
      <div>
        <textarea value={ingredient} onChange={(event) => setIngredient(event.target.value)} placeholder='Entre un ingredient' />
        <button onClick={addIngredient}>Ajouter</button>
      </div>

      <h4>Liste de courses</h4>
      <ul>
        {list.map(ingredient => ingredient ? <li>{ingredient}</li> : null)}
      </ul>
    </div>
  )
}

export default ShoppingList;