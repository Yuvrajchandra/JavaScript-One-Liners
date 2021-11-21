const removeDuplicateFromArray = (arr) => arr.filter((i) => arr.indexOf(i) === arr.lastIndexOf(i));

let arr1 = [1, 2, 3, 4, 5, 1, 2, 3];
console.log(removeDuplicateFromArray(arr1));

let arr2 = ['W', 'E', 'L', 'C', 'O', 'M', 'E', 'T', 'O', 'M', 'U', 'O'];
console.log(removeDuplicateFromArray(arr2));

let arr3 = [5, 5, 5, 3, 3, 4, 5, 8, 2, 8];
console.log(removeDuplicateFromArray(arr3));
