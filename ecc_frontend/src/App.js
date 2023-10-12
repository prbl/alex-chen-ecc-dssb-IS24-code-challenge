import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AlanPage from './components/AlanPage';
import LisaPage from './components/LisaPage';
import PersonaSelection from './components/PersonaSelection';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<PersonaSelection />} />
          <Route path="/lisa" element={<LisaPage />} />
          <Route path="/alan" element={<AlanPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
