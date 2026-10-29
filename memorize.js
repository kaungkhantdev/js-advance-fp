function factorial(n)
{
    console.log('Compute factorial ', n)

    let result = 1;

    for (let i = 1; i <= n; i++)
    {
        result *= i;
    }
    return result;
}

function memorize(fn)
{
    let cache = {}
    return function(n)
    {
        let result = cache[n];
        if (!result)
        {
            result = fn(n);
            cache[n] = result;
        }
        return result;
    }
}

factorial = memorize(factorial);
console.log('Factorial 3 ',factorial(3));
console.log('Factorial 3 ',factorial(3));