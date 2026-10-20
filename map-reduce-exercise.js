let students = [
    {
        name : "Aung Win",
        gender:"Male",
        age : 34,
    },
    {
        name : "Win Win",
        gender:"Female",
        age : 14,
    },
    {
        name : "Naing Win",
        gender:"Male",
        age : 22,
    },
    {
        name : "Mya Mya Win",
        gender:"Female",
        age : 20,
    },
    {
        name : "Kyaw Win",
        gender:"Male",
        age : 24,
    },
    {
        name : "Hla Hla",
        gender:"Female",
        age : 32,
    },
];

let result = students
                .filter(stud => stud.gender == 'Female')
                .reduce((a, b) => a.age < b.age ? a: b);

console.log('result: ', result);



