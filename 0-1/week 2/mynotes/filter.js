// Given an array, give me back even values.

// 1.  Using for loop

const arr = [1, 2, 3, 4, 5];
const newArrLoop = [];
for(let i=0; i<arr.length; i++){
    if(arr[i] % 2 === 0){
        newArrLoop.push(arr[i]);
    }
}
console.log("Using Loop Even: " + newArrLoop);

// 2.  Using filter
const ans = arr.filter((value) => {
    return value % 2 === 0;
});
console.log("Using Filter Even: " + ans);


// 3. 
// List the fullname and Age of the user with age greater than 30
const users = [
    {firstname:"Chandan", lastname:"Kushwaha", age:22},
    {firstname:"Anjali", lastname:"Kumar", age:22},
    {firstname:"RajKumar", lastname:"Kush", age:33},
    {firstname:"Ram", lastname:"Sita", age:43},
    {firstname:"Suraj", lastname:"waha", age:50},
    {firstname:"Anshu", lastname:"Verma", age:25},
];

const fullname = users.filter((user) => {
    return user.age > 30;
});
console.log(fullname);