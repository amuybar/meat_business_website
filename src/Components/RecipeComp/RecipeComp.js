// RecipeComp.js
import React from 'react';
import './RecipeComp.css';
import recipesData from './recipeData'; // Import the data for recipes

const RecipeComp = () => {
 

  return (
    <div className="recipe-container">
      <h2>Recipes</h2>
        <div className="recipe-list">
          {recipesData.map((recipe) => (
            <div key={recipe.id} className="recipe-item" >
              <img src={`${recipe.image}`} alt={recipe.name} />
              <h3>{recipe.name}</h3>
              <p>{recipe.description}</p>
         
            </div>
          ))}
        </div>
      
    </div>
  );
};

export default RecipeComp;
