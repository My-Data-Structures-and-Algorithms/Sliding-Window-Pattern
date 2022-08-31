/**
 * Write a function called maxSubarraySum which accepts an array of integers and a 
 * number called n. The function should calculate the maximum sum of n consecutive
 * elements in the array.
 * 
 * maxSubarraySum([1,2,5,2,8,1,5],2) // 10
 * maxSubarraySum([1,2,5,2,8,1,5],4) // 17
 * maxSubarraySum([4,2,1,6],1) // 6
 * maxSubarraySum([4,2,1,6,2],4) // 13
 * maxSubarraySum([],4) // null
 * 
 * Break it down
 * 0. handle scenarion of empty array
 * 1. beginning at the start of the array
 * 2. loop through the next n elements and keeep track of their sum
 * 3. move to the next element in the array
 * 4. find the next n element and keep track of their sums as well
 * 5. compare the two sums and keep the largest as the current sum
 * 6. stop finding the sum at the nth last element
 * 
 */

//solve/simplify
//Method 1
//maxSubarraySum([1,2,5,2,8,1,5],2) // 10
// let maxSubarraySum = (arr, n) => {
//    if (n > arr.length) {
//        return null;
//    }

//    let max = -Infinity;

//    for (let i = 0; i < arr.length - n + 1; i++) {
//        temp = 0;
       
//        for (let j = 0; j < n; j++) {
//            temp += arr[i + j];         
//        }

//        if (temp > max) {
//            max = temp;
//        }
//    }

//    return max;
// } - Time complexity O(n**2);

//solve/simplify
//Method 2
//maxSubarraySum([4,2,1,6,2],4) // 13
//maxSubarraySum([],4) // null
//maxSubarraySum([1,2,5,2,8,1,5],2) // 10

let maxSubarraySum = (arr, n) => {
    let maxSum = 0;
    let tempSum = 0;

    if (arr.length < n) return null;

    for (let i = 0; i < n; i++) {
        maxSum += arr[i];
    }

    tempSum = maxSum;

    for (let i = n; i < arr.length; i++) {
        tempSum = tempSum - arr[i - n] + arr[i];
        maxSum = Math.max(maxSum, tempSum);      
    }

    return maxSum;
} //time complexity O(n)

console.log(maxSubarraySum([1,2,5,2,8,1,5],2)); // 10
console.log(maxSubarraySum([1,2,5,2,8,1,5],4)); // 17
console.log(maxSubarraySum([4,2,1,6],1)); // 6
console.log(maxSubarraySum([4,2,1,6,2],4)); // 13
console.log(maxSubarraySum([],4)) // null

