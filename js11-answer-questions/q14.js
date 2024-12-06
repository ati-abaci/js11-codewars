// * ==================================2=====================================

/*
 todo: 1. Take the object from question 1  
 todo: 2. put all the values into an array with 2 ways that you’ve learned
*/
//first Way
const object={ number: 6043, age: 21, pt: 96 };
const {number,age,pt}=object;
console.log([number,age,pt])


//second Way
const allTheValues=Object.values(object)
console.log(allTheValues)