// No Pure Function 
let i = 10;
function getData()
{
    return i;
}  

function update(obj) // The function modifies the original object by adding an address property.
{
    obj.address = 'YGN';
}

let obj = {
    name: "Jhon",
    age: 45,
    city: "New York",
    isMarried: true
}
update(obj);
console.log(obj);

// Pure function
/*
A pure function is a function that:

Always returns the same output for the same input.

Has no side effects — it doesn't modify external variables, files, or other state. 
*/

function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5

let obj2 = {
    name: "Jhon2",
    age: 45,
    city: "New York",
    isMarried: true
}

function updatePure(obj)
{
    return {
        ...obj,
        address: 'YGN'
    }
}

let updatedObj = updatePure(obj2);

console.log(obj2);        // Original object unchanged
console.log(updatedObj); // New object with address: "YGN"