
// src/layouts/ResultsLayout.js
import React from "react";

const ResultsLayout = ({ children }) => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      {children}
    </div>
  );
};

export default ResultsLayout;
