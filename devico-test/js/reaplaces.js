"use strict";

function replace(obj) {
   if (typeof obj !== "object") {
      return obj;
   }

   for (let prop in obj) {
      if (typeof obj[prop] === "object") {
         obj[prop] = replace(obj[prop]);
      } 
      
      else {  
         if (obj[prop] === 0) {
            obj[prop] = 1;
         } 
         
         else if (obj[prop] === 1) {
            obj[prop] = 0;
         }
      }
   }

   return obj;
}

export default replace;