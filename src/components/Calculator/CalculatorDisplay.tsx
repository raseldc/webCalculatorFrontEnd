import React from 'react';

interface CalculatorDisplayProps {
  value: string;
}

const CalculatorDisplay = ({ value }: CalculatorDisplayProps) => (
  <div className="w-full h-28 bg-[#f9dcb8] flex items-end text-right">
    <div className="w-full py-5 px-6 text-6xl text-black font-thin">
      {value}
    </div>
  </div>
);

export default CalculatorDisplay;