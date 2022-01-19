import React from 'react';
import { RecipeProps } from '../../types';

const InstructionsList = (props: RecipeProps) => {
  const { instructions } = props

  return (
    <>
      <h4>Instructions</h4>
      <ul>{instructions.map(instruction => <li>{instruction}</li>)}</ul>
    </>
  )
}

export default InstructionsList;