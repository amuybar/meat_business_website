// App.js
import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import RecipeComp from './Components/RecipeComp/RecipeComp';
import VarComp from './Components/VarComp/VarComp';
import LandingComp from './Components/LandingComp/landingComp';
import ContactComp from './Components/ContactComp/ContactComp';
import BlogComp from './Components/BlogComp/BlogComp';

function App() {
  return (
    <div>
      <Nav />
      <LandingComp />
      <RecipeComp />
      <VarComp />
      <BlogComp />
      <ContactComp />
      <div className="footer">
        <p>&copy; 2024 Your Meat Shop</p>
      </div>
    </div>
  );
}

export default App;
