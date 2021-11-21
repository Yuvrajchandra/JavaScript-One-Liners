const convertSnakeToCamel = (s) => s.toLowerCase().replace(/(_\w)/g, (w) => w.toUpperCase().substr(1));

let s1 = "hello_world";
console.log(convertSnakeToCamel(s1));

let s2 = "make_use_of";
console.log(convertSnakeToCamel(s2));

let s3 = "this_is_variable";
console.log(convertSnakeToCamel(s3));
