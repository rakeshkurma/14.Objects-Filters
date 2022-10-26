let employees = [
    {
    "id": 1,
    "name":"Abhinav",
    "department":"IT",
    "Salary":75000
    },
    {
    "id": 2,
    "name":"Gaurav",
    "department":"Sa",
    "Salary":52000
    },
    {
    "id": 3,
    "name":"Raj",
    "department":"IT",
    "Salary":64000
    }];


let it= employees.filter(ele=>{
    return ele.department=="IT";
})

console.log(`IT Department Recordes `);
console.log(it);


let sal=employees.filter(ele=>{
    return ele.Salary < 65000;
})


console.log(sal);
