// //destruction variable
// const person = {
//     name: 'ali',
//     age: 20,
//     job: 'developer',
//     address: 'tehran',
//     salary: 1000
// }

// const { name, age, job, address, salary } = person;
// console.log(name, age, job, address, salary);

// const perkenalan = ["halo","nama","saya",`${person.name}`];
// // const [halo, nama, saya, sa] = perkenalan;
// // console.log(halo, nama, saya, sa);
// const [, ,saya, sa] = perkenalan;
// console.log(saya, sa);

// let a = 1;
// let b = 2;

// [a,b] = [b,a];
// console.log(a,b);

//RETURN VALUE
function add(){
    return [1,2];
}

const [a,b] = add();
console.log(a,b);

//REST PARAMETER
const [...d] = [1,2,3,4,5,6];
console.log(d);

//OBJECK
// const obj = {
//     name: 'ali',
//     age: 20,
//     job: 'developer',
//     address: 'tehran',
//     salary: 1000
// }

// const {name,age, ...rest} = obj;
// console.log(name,age,rest);

//asign tampa objeck

// ({ name, age, ...rest } = {
//     name: 'ali',
//     age: 20,
//     job: 'developer',
//     address: 'tehran',
//     salary: 1000
// }
// );
// console.log(name, age, rest);


// assign var baru
// const c = {
//     name: 'ali',
//     age: 20,
//     job: 'developer',
//     address: 'tehran',
//     salary: 1000
// };
// const {name:e, umur:f , ...rest} = c;
// console.log(e);
// console.log(c);



//add default value
const c = {
    name: 'ali',
    age: 20,
    job: 'developer',
    address: 'tehran',
    salary: 1000
};
// const {name:e, umur:f ,email: j = "default@gmail.com", ...rest} = c;
// console.log(e);
// console.log(c);

//REST PARAMEMETER
// MENGAMBIL FIELD PADA OBJECT
function g({name}){
    return name;
}

console.log(g(c));