import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './PersonaSelection.css'; // Ensure to import the CSS file

const PersonaSelection = () => {
  return (
    <div className="persona-selection">
      <h1>Welcome to ECC Product Management</h1>
      <div className="button-container">
        <Link to="/lisa">
          <Button variant="primary" size="lg">Lisa</Button>
        </Link>
        <Link to="/alan">
          <Button variant="info" size="lg">Alan</Button>
        </Link>
      </div>
    </div>
  );
};

export default PersonaSelection;
