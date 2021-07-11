let x1 = { a:6, b:5, c:4, d:1, e:3, f:5, g:3, h:2};
let x2 = { a:8, b:7, c:1, d:2, e:6, f:6, g:0, h:1};
let x3 = { a:2, b:3, c:9, d:2, e:1, f:2, g:8, h:5};
let x4 = { a:4, b:1, c:8, d:5, e:2, f:0, g:9, h:4};

function functionOfX(val){
    let x = ((val.a+val.b)-(val.c+val.d)+(val.e+val.f)-(val.g+val.h));
    return x;
}

let fitness_x1 = functionOfX(x1);
let fitness_x2 = functionOfX(x2);
let fitness_x3 = functionOfX(x3);
let fitness_x4 = functionOfX(x4);

console.log(fitness_x1);
console.log(fitness_x2);
console.log(fitness_x3);
console.log(fitness_x4);