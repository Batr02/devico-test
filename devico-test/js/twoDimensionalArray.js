"use strict";

function bar(n) {
   const result = [];

   for (let i = 0; i < n; i++) {
     const row = [];

     for (let j = 0; j < n; j++) {
       if (i === j) {
         row.push(2);
       } 

       else if (i + j === n - 1) {
         row.push(2);
       } 
       
       else if (i < j && i + j < n - 1) {
         row.push(1);
       } 
       
       else if (i > j && i + j > n - 1) {
         row.push(1);
       } 
       
       else {
         row.push(0);
       }
     }

     result.push(row);
   }

   return result;
 }
 
export default bar;