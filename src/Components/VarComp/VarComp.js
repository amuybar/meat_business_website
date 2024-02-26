// VarComp.js
import React, { useState } from 'react';
import './VarComp.css';
import meatVariablesData from './meatVariableData';

const VarComp = () => {
  const [selectedVariable, setSelectedVariable] = useState(null);

  const handleSelectVariable = (variable) => {
    setSelectedVariable(variable);
  };

  const handleBackToAll = () => {
    setSelectedVariable(null);
  };


  return (
    <div className="var-container">
      <h2>Meat Variables</h2>

      {selectedVariable ? (
        <div className="variable-details">
          <img src={`${selectedVariable.image}`} alt={selectedVariable.name} />
          <h3>{selectedVariable.name}</h3>
          <p>{selectedVariable.price}</p>
          <p>{selectedVariable.description}</p>
          <button onClick={handleBackToAll}>Back to All</button>
        </div>
      ) : (
        <div className="variable-list-container">
          <div className="variable-list">
            {meatVariablesData.map((variable) => (
              <div key={variable.id} className="variable-item" onClick={() => handleSelectVariable(variable)}>
                <img src={`${variable.image}`} alt={variable.name} />
                
                <h3>{variable.name}</h3>
                <p>{variable.price}</p>
                <button>Order Now</button>
              </div>
            ))}
          </div>
        </div>
      )}
     
    </div>
  );
};

export default VarComp;
