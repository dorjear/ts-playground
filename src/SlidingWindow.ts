function maxSumSubarray(arr: number[], k: number): number {
    let maxSum = 0;
    let windowSum = 0;
    let windowStart = 0;

    for (let i = windowStart; i < k; i++){
        windowSum += arr[i];
    }

    maxSum = windowSum;

    for (let i = k; i < arr.length; i++){
        windowSum = windowSum - arr [i - k] + arr[i]
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}

const array = [4, 2, 1, 7, 8, 1, 2, 8, 1, 0];
const k = 3;
const result = maxSumSubarray(array, k)
console.log(`max is ${result}`)
