"use strict";

import calc from './calculator.js';
import replace from './reaplaces.js';
import bar from './twoDimensionalArray.js';
import outputElements from './elementsOutput.js';
import Worker from './worker.js';

//1

// console.log(calc(5, "+"));  
// console.log(calc(2, "*"));   
// console.log(calc(3, "-"));   
// console.log(calc(2, "*"));  
// console.log(calc(7, "/"));  

//2

// const d = {
//    left: {
//       left: {
//          left: 1,
//          right: {
//             left: 0,
//             right: 1,
//          },
//       },
//       right: {
//          left: 0,
//          right: 1,
//       },
//    },
//    right: 1,
//    }
// replace(d);
// console.log(d);

//3

//  console.log(bar(5));
//  console.log(bar(4));

//4

outputElements();

//5

// const worker = new Worker('Ivan', 'Ivanov', 10, 31);
// console.log(worker.getRate); //outputs 10
// console.log(worker.getDays); //outputs 31
// console.log(worker.getSalary()); //outputs 310 - what equal 10*31

// worker.setRate = 20; // let's increase rate
// worker.setDays = 10; // let's decrease days
// console.log(worker.getSalary()); //outputs 200 - what equal 20*10

