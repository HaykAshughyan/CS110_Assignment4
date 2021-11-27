let matrixProd = require('./util.js')

let m1 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

let m2 = [
    [7,8,9],
    [1,2,2],
    [5,6,5]
];


console.log(matrixProd.matrixProduct(m1,m2));

console.log(matrixProd.sumOfMatrices(m1,m2));

console.log(matrixProd.sumOfEachRow(m1));