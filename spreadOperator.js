// example of spread Operator
numbers = [1,2,3,4,5];

fruits = ['apple','mango','papaya','orange'];

vegetables = ['brinjal','ladyfinger'];


// numberFruitsVegetables = [...numbers,...fruits,...vegetables];

// console.log(numberFruitsVegetables);
 // We can aslo apply with objects 

 const employee ={name:"Dileep",company:"czentrix"};

 const salary = {salary:25000};

 const location = {location:"Gurgoan"};

 const employeeSalaryLocation ={...employee,...salary,...location};

 console.log(employeeSalaryLocation);