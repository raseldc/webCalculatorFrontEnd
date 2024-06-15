import React from 'react';

const CalculatorLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center px-5 py-5">
    <div className="w-full mx-auto rounded-xl bg-gray-100 shadow-xl text-gray-800 relative overflow-hidden" style={{ maxWidth: '500px' }}>
      {children}
    </div>
  </div>
);

export default CalculatorLayout;