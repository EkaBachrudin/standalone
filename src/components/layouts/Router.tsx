
import Landing from 'pages/Landing/Landing';
import Doc from '../../pages/Doc/Doc';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/doc" replace />} />
        <Route path="/doc" element={<Doc />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
