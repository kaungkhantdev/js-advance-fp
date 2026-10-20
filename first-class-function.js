// Main function
function hello()
{
    console.log('Hello');
}

// Rule 1: Assign a function to a variable
const fun = hello;
fun();

// Rule 2: Pass a function as an argument
function acceptFun(callback)
{
    console.log("Accept Function");
    callback();
}
acceptFun(fun);

// Rule 3: Return a function from another function
function getFun()
{
    console.log("getFun");

    return function() {
        console.log("Function returned from getFun");
    }
}

const returnedFun = getFun;
returnedFun();

// You can also call it directly:
getFun()();