import React, { useState } from "react";
import { handleClickBase } from "../HandleCalculatorFuinction";

import CalculatorButton from "../../components/Calculator/CalculatorButton";
import CalculatorDisplay from "../../components/Calculator/CalculatorDisplay";
import CalculatorLayout from "../../components/Calculator/CalculatorLayout";

const BasicCalculator = () => {
  const [inputValue, setInputValue] = useState('')
  var [calculatorMemory, setCalculatorMemory] = useState('');

  const handleClick = (value: string) => {

    setInputValue(handleClickBase(value, inputValue));

  };

  return (
    <CalculatorLayout>
      <CalculatorDisplay value={inputValue} />
      <div className="w-full bg-[#f9dcb8]">
        <div className="flex w-full">
          <CalculatorButton onClick={handleClick} value="%" className="bg-[#ffe5d5] hover:bg-opacity-80 text-black text-xl font-light mx-[1px] my-[1px]" />
          <CalculatorButton onClick={handleClick} value="CE" className="bg-[#ffe5d5] hover:bg-opacity-80 text-black text-xl font-light mx-[1px] my-[1px]" />
          <CalculatorButton onClick={handleClick} value="C" className="bg-[#ffe5d5] hover:bg-opacity-80 text-black text-xl font-light mx-[1px] my-[1px]" />
          <CalculatorButton onClick={handleClick} value="⌫" className="bg-[#ffe5d5] hover:bg-opacity-80 text-black text-2xl font-light mx-[1px] my-[1px]" />

        </div>
        <div className="flex w-full">
          <CalculatorButton onClick={handleClick} value="1/x" className="bg-[#ffe5d5] hover:bg-opacity-80 text-black text-2xl font-light mx-[1px] my-[1px]" />
          <CalculatorButton onClick={handleClick} value="x²" className="bg-[#ffe5d5] hover:bg-opacity-80 text-black text-2xl font-light mx-[1px] my-[1px]" />
          <CalculatorButton onClick={handleClick} value="∛" className="bg-[#ffe5d5] hover:bg-opacity-80 text-black text-2xl font-light mx-[1px] my-[1px]" />          
          <CalculatorButton onClick={handleClick} value="/" className="bg-[#ffe5d5] hover:bg-opacity-80 text-black text-2xl font-light mx-[1px] my-[1px]" />
        </div>
        <div className="flex w-full">
          <CalculatorButton onClick={handleClick} value="7" className="bg-white hover:bg-opacity-80 text-black text-xl font-light mx-[1px] my-[1px]" />
          <CalculatorButton onClick={handleClick} value="8" className="bg-white hover:bg-opacity-80 text-black text-xl font-light mx-[1px] my-[1px]" />
          <CalculatorButton onClick={handleClick} value="9" className="bg-white hover:bg-opacity-80 text-black text-xl font-light mx-[1px] my-[1px]" />
          <CalculatorButton onClick={handleClick} value="*" className="bg-[#ffe5d5] hover:bg-opacity-80 text-black text-xl font-light mx-[1px] my-[1px]" />      
        </div>
        <div className="flex w-full">
          <CalculatorButton onClick={handleClick} value="4" className="bg-white hover:bg-opacity-80 text-black text-xl font-light mx-[1px] my-[1px]" />
          <CalculatorButton onClick={handleClick} value="5" className="bg-white hover:bg-opacity-80 text-black text-xl font-light mx-[1px] my-[1px]" />
          <CalculatorButton onClick={handleClick} value="6" className="bg-white hover:bg-opacity-80 text-black text-xl font-light mx-[1px] my-[1px]" />
          <CalculatorButton onClick={handleClick} value="-" className="bg-[#ffe5d5] hover:bg-opacity-80 text-black text-xl font-light mx-[1px] my-[1px]" />
        </div>
        <div className="flex w-full">
          <CalculatorButton onClick={handleClick} value="1" className="bg-white hover:bg-opacity-80 text-black text-xl font-light mx-[1px] my-[1px]" />
          <CalculatorButton onClick={handleClick} value="2" className="bg-white hover:bg-opacity-80 text-black text-xl font-light mx-[1px] my-[1px]" />
          <CalculatorButton onClick={handleClick} value="3" className="bg-white hover:bg-opacity-80 text-black text-xl font-light mx-[1px] my-[1px]" />
          <CalculatorButton onClick={handleClick} value="+" className="bg-[#ffe5d5] hover:bg-opacity-80 text-black text-xl font-light mx-[1px] my-[1px]" />
        </div>
        <div className="flex w-full">
          <CalculatorButton onClick={handleClick} value="+/-" className="bg-white hover:bg-opacity-80 text-black text-xl font-light mx-[1px] my-[1px]" />
          <CalculatorButton onClick={handleClick} value="0" className="bg-white hover:bg-opacity-80 text-black text-xl font-light mx-[1px] my-[1px]" />
          <CalculatorButton onClick={handleClick} value="." className="bg-white hover:bg-opacity-80 text-black text-xl font-light mx-[1px] my-[1px]" />
          <CalculatorButton onClick={handleClick} value="=" className="bg-[#b24c0c] hover:bg-opacity-80 text-white text-xl font-light mx-[1px] my-[1px]" />
        </div>
        
      </div>
    </CalculatorLayout>
  );


};
export default BasicCalculator;