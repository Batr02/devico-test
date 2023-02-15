"use strict";

function calculator() {
   let accumulator = 0;

   return function (newNum, operator){
      switch(operator) {
         case '+':
            accumulator += newNum;
            break;

         case '-':
            accumulator -= newNum;
            break;

         case '*':
            accumulator *= newNum;
            break;

         case '/':
            accumulator /= newNum;
            break;

         default:
            console.log('Invalid operator');
            return;
      }  

      return accumulator;   
   }
}
 
const calc = calculator();
   
export default calc;
