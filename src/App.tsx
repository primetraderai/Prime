import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBanner from './components/TopBanner';
import Home from './pages/Home';
import Docs from './pages/Docs';

function App() {
  return (
    <div className="min-h-screen bg-galaxy-bg">
      <Router>
        <TopBanner />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<Docs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;