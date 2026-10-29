let arr = [1,2,3,4,5,6];
let isEven = (x) => x % 2 == 0;

function not(fn)
{
    return function(...args)
    {
        return !fn(...args);
    }
}

let list = arr.filter(not(isEven));
console.log('list ', list);

function unary(fn)
{
    return function(x)
    {
        return fn(x);
    }
}

console.log(["1", "2", "3"].map(unary(parseInt)));

console.log('parseInt(2,1) ',parseInt(2,1));
console.log('parseInt("2") ',parseInt("2"));