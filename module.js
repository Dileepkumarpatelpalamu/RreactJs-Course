// There are two types of module export javascript

// Name export or for example
//export const name = "Jesse"
//export const age = 40

const name = "Jesse"
const age = 40

export { name, age }
// default export
const message = () => {
    const name = "Jesse";
    const age = 40;
    return name + ' is ' + age + 'years old.';
  };
  
  export default message;


// import in js

import { name, age } from "./person.js";

import message from "./message.js";
