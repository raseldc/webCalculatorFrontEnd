import { handleBackspace, handleDot, handlleRoot } from '../pages/HandleCalculatorFuinction';
import { render, fireEvent } from '@testing-library/react';
import HandleCalculatorFunction from '../pages/HandleCalculatorFuinction';
import exp from 'constants';


test('handleBackspace removes the last character from a string', () => {
  const input = '1234';
  const output = handleBackspace(input);

  expect(output).toBe('123');
});

test('handleDot function', () => {


  expect(handleDot("0")).toBe("0.");

});

test('handlleRoot function', () => {
  
 
   expect(handlleRoot("8")).toBe("2");
 
 });
 