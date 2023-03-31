/* 
 *  App.js
 *  Recipe App
 *  Created by Patrick Browne
 * 
 *  This file contains the App component, which is the top-level 
 *  component for the Recipe App. It contains the UserInput and
 *  RecipeOutput components.
 * 
 */

import React, { useState } from 'react';
import UserInput from './UserInput';
import RecipeOutput from './RecipeOutput';
import './App.css';
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.API_TOKEN,
});
const openai = new OpenAIApi(configuration);

const key = process.env.API_TOKEN;

function App() {
  const [inputValue, setInputValue] = useState('');
  const [recipeOutput, setRecipeOutput] = useState('');

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const fetchRecipes = async (inputText) => {
    setRecipeOutput(`Your generated recipe for "${key}" will appear here.`);
    try {
      const response = await openai.createCompletion({
          model: "text-davinci-003",
          prompt: "Say this is a test",
          temperature: 0,
          max_tokens: 7,
      });
      setRecipeOutput(`Your generated recipe for "${response}" will appear here.`);

      const recipe = response.data.choices[0].text;
      console.log(recipe);
      // Process the recipe and update the state in your React component as needed.
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchRecipes(inputValue);
  };

  return (
    <div className="App">
      <UserInput changed={handleInputChange} currentName={inputValue} onSubmit={handleSubmit} />
      <RecipeOutput recipeOutput={recipeOutput} />
    </div>
  );
}

export default App;
