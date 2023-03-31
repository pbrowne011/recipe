/* 
 *  RecipeOutput.js
 *  This component is used to take output from the LLM and display
 *  it in a readable format to the user.
 * 
 */

import React from 'react';


export default function RecipeOutput(props) {
  const formatRecipeOutput = (output) => {
    return output.split('\n').map((line, index) => (
      <p key={index} className="recipe-line">
        {line}
      </p>
    ));
  };


  // Note to self: would be cool if you could get the tile of the
  // response returned by GPT and dipslay it here
  // Would involve an intermediate stage of output as well
  return (
    <div className="recipe-output">
      {props.recipeOutput ? (
        <article className="recipe-card">
          <h2 className="recipe-title">And your recipe is...</h2>
          <div className="recipe-content">
            {formatRecipeOutput(props.recipeOutput)}
          </div>
        </article>
      ) : (
        <p className="no-recipe-message">No recipe generated yet. Please submit a request.</p>
      )}
    </div>
  );
}
