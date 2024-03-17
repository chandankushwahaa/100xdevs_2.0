// Finding Sum

const arr = [1, 2, 3, 4, 5];

// 1.  Using for loop
function finsSum(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
console.log("Using Loop Sum: " + finsSum(arr));

// 2.  Using reduce
const ans = arr.reduce((acc, value) => {
    return acc + value;
}, 0); // 0 is the initial value of acc(accumulator)
console.log("Using Reduce Sum: " + ans);

// 3. Using reduce Single Line
const ans2 = arr.reduce((acc, value) => acc + value, 0);
console.log("Using Reduce Single Line Sum: " + ans2);


// Find the number of people with unique age
const users = [
    {firstname:"Chandan", lastname:"Kushwaha", age:22},
    {firstname:"Anjali", lastname:"Kumar", age:22},
    {firstname:"RajKumar", lastname:"Kush", age:33},
    {firstname:"Ram", lastname:"Sita", age:43},
    {firstname:"Suraj", lastname:"waha", age:50},
    {firstname:"Anshu", lastname:"Verma", age:25},
];
const uniqueAges = users.reduce(function(acc, curr){
    if(acc[curr.age]){
        acc[curr.age] += 1;
    }else{
        acc[curr.age] = 1;
    }
    return acc;
}, {});
console.log("Printing People with Unique Age: ⏬")
console.log(uniqueAges);