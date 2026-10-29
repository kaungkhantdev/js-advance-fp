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

function compose(...fns)
{
    return function(x)
    {
        return fns.reduceRight((input, f) => f(input), x)
    }
}


let len = (x) => x.length;
let newFun = compose(len, toUpper, appendHi);
console.log('newFun hello I am compose rule',newFun("hello I am compose rule"));

let double = (x) => x * 2;
let inc = (x) => x + 1;

newFun = compose(double,inc)
console.log('newFun hello ',newFun(3));