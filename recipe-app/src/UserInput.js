/* 
 *  UserInput.js
 *  This component is used to take input from the user to give
 *  to the LLM for output.
 *  
 */

import React from 'react';

export default function UserInput(props) {
  const handleChange = (event) => {
    props.changed(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(event);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="user-input">Generate an idea...</label>
        <input
          type="text"
          id="user-input"
          onChange={handleChange}
          value={props.currentName}
          placeholder="What would you like to eat today?"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}