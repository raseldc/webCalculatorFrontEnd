
export function removeLeadingZero(inputvalue: string) {
  console.log(inputvalue);
  if (inputvalue === '' || inputvalue === '0') {
    return '';
  }

  if (inputvalue[0] === '0' && inputvalue[1] !== '.') {

    return inputvalue.slice(1);
  }
  return inputvalue;

}
export function handleOneByX(inputvalue: string) {
  return (1 / parseFloat(inputvalue)).toString();
}
export function handlePlusMinus(value: string) {
alert(value);
  if (value[0] === '-') {
    return (value.slice(1));
  } else {
    return ('-' + value);
  }

}
export function handlePercentage(value: string) {
  console.log(value);
  console.log("From Here");
  return ((parseFloat(value) / 100).toString());
}
export function handlleSquare(value: string) {
  return ((parseFloat(value) * parseFloat(value)).toString());
}

export function handlleRoot(value: string = '') {
  var v = removeLeadingZero(value ?? '');
  console.log(v);
  if (v === '') {
    return '';
  }
  v = v + '**(1/3)';

  return (eval(v).toString());
}


export function handleClear() {
  return ('');
}
export function handleCalculate(value: string) {
  try {
    var val = removeLeadingZero(value);

    if (val === '') {
      return ('');
    }
    val = val?.replaceAll('x²', '**2');
    val = val?.replaceAll('∛', '**(1/3)');
    val = val?.replaceAll('1/x', '**(-1)');
    val = val?.replaceAll('%', '/100');
    val = val?.replaceAll('÷', '/');
    val = val?.replaceAll('x', '*');
    val = val?.replaceAll('--', '+');

    console.log(val);
    const result = eval(val?.toString() || '');
    return (result.toString());
  } catch (error) {
    return ('Error');
  }
}
export function handleDot(value: string) {
  if (value === '') {
    return ('0.');
  }
  //get last float number
  var lastNumber = value.split(/[-+*/]/).pop()?.toString() || '';
  if (!lastNumber.includes('.')) {
    return (value + '.');
  }
  return (value);

}

export function calculate(inputvalue: string) {
  try {
    // Evaluate the expression in inputvalue
    var val = inputvalue;

    val = val.replaceAll('x²', '**2');
    val = val.replaceAll('∛', '**(1/3)');
    val = val.replaceAll('1/x', '**(-1)');
    val = val.replaceAll('%', '/100');
    val = val.replaceAll('÷', '/');
    val = val.replaceAll('x', '*');
    val = val.replaceAll('--', '+');
    //remove leading zeros
    val = val.replace(/^0+/, '');
    console.log(val);
    const result = eval(val);

    // Set the result as the new inputvalue
    return (result.toString());
  } catch (error) {
    // If the expression is not valid, set inputvalue to 'Error'
    console.log(error);
    return ('Error');
  }
};

export function handleBackspace(value: string) {
  console.log(value);
  if(value === '0' || value === '') {
    return '';
  }
  return (value.slice(0, -1));
}

var calculatorMemory = '0';


export function handleClickBase(key: string, calculateValue: string) {
  switch (key) {
    case 'C':
      return '0';
      break;
    case 'CE':
      return calculateValue.slice(0, -1);
      break;
    case 'M+':
      handleMemoryPlus(calculateValue);
      return calculateValue
      break;
    case 'M-':
      handleMemoryMinus(calculateValue);
      return calculateValue;
      break;
    case 'MC':
      handleMemoryMC(calculateValue);
      return calculateValue;
      break;
    case 'MR':
      return handleMemoryMR(calculateValue);

      break;
    case 'MS':
      handleMemoryMS(calculateValue);

      break;

      break;
    case '=':
      return (calculate(calculateValue));
      break;
    case 'x²':
      return (handlleSquare(calculateValue));
      break;
    case '∛':
      return (handlleRoot(calculateValue));

      break;
    case '1/x':

      return (handleOneByX(calculateValue));
      break;
    case '÷':
      return (calculateValue + '/');
      break;
    case '+':
      return (calculateValue + '+');
      break;
    case '-':
      return (calculateValue + '-');
      break;
    case '*':
      return (calculateValue + '*');
      break;
    case '/':
      return (calculateValue + '/');
      break;
    case '%':
      return (handlePercentage(calculateValue));
      break;
    case '+/-':
      return (handlePlusMinus(calculateValue));
      break;
    case '1':
      return (calculateValue + '1');
      break;
    case '2':
      return (calculateValue + '2');
      break;
    case '3':
      return (calculateValue + '3');
      break;
    case '4':
      return (calculateValue + '4');
      break;
    case '5':
      return (calculateValue + '5');
      break;
    case '6':
      return (calculateValue + '6');
      break;
    case '7':
      return (calculateValue + '7');
      break;
    case '8':
      return (calculateValue + '8');
      break;
    case '9':
      return (calculateValue + '9');
      break;
    case '0':
      return (calculateValue + '0');
      break;
    case '⌫':
      return (handleBackspace(calculateValue));
      break;
    case ".":
      return (handleDot(calculateValue));
      break;
    default:
      // setInputValue(prev => prev + value);
      break;

  }

};

// export function  memoryHandler(value: string) {
//   if (value === 'MC') {
//     calculatorMemory = '';
//   }
//   else if (value === 'MR') {
//     return  calculatorMemory[calculatorMemory.length - 1];
//   }
//   else if (value === 'M+') {
//     calculatorMemory = eval(parseInt(calculatorMemory) + inputvalue).toString();
//   }
//   else if (value === 'M-') {
//     setCalculatorMemory((parseFloat(calculatorMemory) - parseFloat(inputvalue)).toString());
//   }
//   else if (value === 'MS') {
//     setCalculatorMemory(inputvalue);
//   }

// }
export function handleMemoryPlus(inputvalue: string) {
  calculatorMemory = ((parseFloat(calculatorMemory) + parseFloat(inputvalue)).toString());
}
function handleMemoryMinus(inputvalue: string) {
  calculatorMemory = ((parseFloat(calculatorMemory) - parseFloat(inputvalue)).toString());
}
function handleMemoryMC(inputvalue: string) {
  calculatorMemory = '0';

}
function handleMemoryMR(inputvalue: string) {
  return calculatorMemory;
}
function handleMemoryMS(inputvalue: string) {
  throw new Error("Function not implemented.");
}
export default function HandleCalculatorFuinction() {
  return null;
}