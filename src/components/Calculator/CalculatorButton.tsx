import React from 'react';

interface CalculatorButtonProps {
  onClick: (value: any) => void;
  value: any;
  className: string;
}

const CalculatorButton = ({ onClick, value, className }: CalculatorButtonProps) => (
  <button onClick={() => onClick(value)} className={`w-full h-16 outline-none focus:outline-none ${className}`}>
    {value}
  </button>
);

export default CalculatorButton;