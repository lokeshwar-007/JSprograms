console.log("ARRAY CONTAINING ONLY EVEN NUMBERS")
let nums = [1,2,3,4,5,6,7,8,9,10]
let evens = nums.filter(function(num){
    return (num % 2 == 0);
})
console.log("Array of evens : ",evens)