function hiFn()
{
    console.log("Hi, I am high order function.")
}

function acceptFnHi(fun)
{
    console.log("Accept Fun: ");
    fun();
}

acceptFnHi(hiFn);

function getFun()
{
    console.log('getFun: ');
    return function() {
        console.log('Function returend from getFun')
    }
}
getFun()()

