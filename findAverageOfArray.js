const calculateAverage = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;

let arr1 = [1, 2, 3, 4, 5];
console.log(calculateAverage(arr1));

let arr2 = [12, 34, 45, 43];
console.log(calculateAverage(arr2));

let arr3 = [2, 4, 6, 8, 10];
console.log(calculateAverage(arr3));
