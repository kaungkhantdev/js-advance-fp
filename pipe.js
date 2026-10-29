function appendHi(msg)
{
    return msg + " hi";
}

function toUpper(msg)
{
    return msg.toUpperCase();
}

function appendHiAndToUpper(msg)
{
    return appendHi(toUpper(msg))
}

console.log('appendHiAndToUpper("hello") ',appendHiAndToUpper("hello"));

// Composition rule
// Rule
// Same input, Same output
// Same types

function pipe(...fns)
{
    return function(x)
    {
        return fns.reduce((input, f) => f(input), x)
    }
}

let newFun = pipe(toUpper, appendHi);
console.log('newFun hello I am pipe',newFun("hello I am pipe"));

let double = (x) => x * 2;
let inc = (x) => x + 1;

newFun = pipe(double,inc)
console.log('newFun hello ',newFun(3));