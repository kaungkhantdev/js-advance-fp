let arr = [1,2,3,4,5,6,7,8];

let arr2 = arr.map( a => a * 2);
console.log("arr2 ", arr2)

let arr3 = arr.filter(a => a % 2 == 0);
console.log("arr3 ", arr3)

console.log("arr ", arr)
let total = arr.reduce((a, b) => {
    console.log('a ',a ,' b ',b);
    return a+b;
});
console.log('total ', total)

let min = arr.reduce((a, b) => {
    console.log('a ',a ,' b ',b);
    return a < b ? a : b;
})
console.log('Min ', min)