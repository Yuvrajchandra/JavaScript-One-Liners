const checkEmptyArray = (arr) => !Array.isArray(arr) || arr.length === 0;

let arr1 = [1, 2, 3, 4, 5];
console.log(checkEmptyArray(arr1));

let arr2 = [];
console.log(checkEmptyArray(arr2));

let arr3 = [""];
console.log(checkEmptyArray(arr3));
