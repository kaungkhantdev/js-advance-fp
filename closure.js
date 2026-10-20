function outer()
{
    let i = 10;

    function inner()
    {
        return i++;
    }

    return inner;
}

let fun = outer();
console.log('fun ',fun());
console.log('fun ',fun());
console.log('fun ',fun());

function stack()
{
    let items = [];

    function push(item)
    {
        items.push(item);
    }

    function pop()
    {
        items.pop();
        console.log('items: ', items)
    }

    return { push, pop };
}

let st = stack();
st.push(10);
st.push(20);
st.push(30);
console.log('stack ',st.pop());
console.log('stack ',st.pop());
console.log('stack ',st.pop());