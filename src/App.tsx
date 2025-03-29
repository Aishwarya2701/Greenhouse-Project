import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Intro } from './pages/Intro';
import { AimMotivation } from './pages/AimMotivation';
import { AQIProject } from './pages/AQIProject';
import { PlantHealth } from './pages/PlantHealth';
import { Gallery } from './pages/Gallery';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/aim-motivation" element={<AimMotivation />} />
            <Route path="/aqi-project" element={<AQIProject />} />
            <Route path="/plant-health" element={<PlantHealth />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;