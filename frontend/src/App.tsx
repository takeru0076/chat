import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ApiTest from './components/ApiTest';

const App: React.FC = () => {
  return (
    <div id="app">
      <Router>
        <Routes>
          <Route path="/" element={<ApiTest />} />
          {/* Add more routes here if needed */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
