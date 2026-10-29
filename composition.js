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

// Composition

function compose(funA, funB)
{
    return function(x)
    {
        return funA(funB(x));
    }
}

let newFun = compose(toUpper,appendHi);
console.log('newFun hello ',newFun("hello, I am compose"));

let double = (x) => x * 2;
let inc = (x) => x + 1;

newFun = compose(inc, double);
console.log('newFun hello ',newFun(3));