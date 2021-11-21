const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());

let arr1 = [1, 2, 3, 4, 5];
console.log(shuffleArray(arr1));

let arr2 = [12, 34, 45, 43];
console.log(shuffleArray(arr2));

let arr3 = [2, 4, 6, 8, 10];
console.log(shuffleArray(arr3));
