function pipe(...fns)
{
    return function(x)
    {
        return fns.reduce((input, f) => f(input), x);
    }
}

// Before currying - using like that
function add(x)
{
    return function(y)
    {
        console.log('x + y', x, y)
        return x+y;
    }
}
console.log('add(4) ',add(4));
console.log('add(4) ',add(4)(3));

// Currying
function curry(fn)
{
    return function(x)
    {
        return fn.length == 1 ? fn(x) : curry(fn.bind(null,x));
    }
}

function add2(x,y)
{
    return x + y;
}
// NaN
console.log('add2(4) ',add2(4));

let newFun = pipe(curry(add2)(4));
// x is 3, y is 4
console.log('newFun 3 ',newFun(3));

let double = (x) => x * 2;
let inc = (x) => x + 1;
let newFun2 = pipe(curry(add)(4),double,inc);
// curry(add)(4)- 7, double(7), inc(14)
console.log('newFun 3 ',newFun2(3));
