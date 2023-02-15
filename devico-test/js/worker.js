"use strict";

class Worker {
   #name;
   #surname;
   #rate;
   #days;
 
   constructor(name, surname, rate, days) {
     this.#name = name;
     this.#surname = surname;
     this.#rate = rate;
     this.#days = days;
   }
   
   get getName() {
     return this.#name;
   }
 
   get getSurname() {
     return this.#surname;
   }
 
   get getRate() {
     return this.#rate;
   }
 
   set setRate(rateValue) {
      const rateCondition = 
      typeof(rateValue) !== 'number' || rateValue.length < 1;
      
      if (rateCondition) {
          console.log('wrong rate input!');
      }

     this.#rate = rateValue;
   }
 
   get getDays() {
     return this.#days;
   }
 
   set setDays(daysValue) {
      const rateCondition = 
      typeof(daysValue) !== 'number' || daysValue.length < 1;
      
      if (rateCondition) {
          console.log('wrong rate input!');
      }


     this.#days = daysValue;
   }
 
   getSalary() {
      return this.#rate * this.#days;
    } 
 
}

export default Worker;
 