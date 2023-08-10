// Write an arrow function that takes two numbers and returns their product.
const avg=(nums)=>{
    let add=0;
    for(let i=0;i<nums.length;i++){
        add=add+nums[i];
    }
    let average =add/(nums.length);
    return average
}
let nums=[2,4,6,8,0,0];
console.log(avg(nums));