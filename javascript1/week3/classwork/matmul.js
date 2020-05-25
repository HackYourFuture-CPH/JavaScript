/**
 *  Matrix multiplication
 * 
 *  1 2   2 3   = [1*2 + 2* 1, 1*3 + 2*0 ]
 *  3 4   1 0     [3 *2 + 4 *1, 3*3 + 4*0]
 * 
 * 
*/
let mat1 = [[1,2],[3,4]];
let mat2= [[2,3],[1,0]];

for (let i = 0; i < mat1.length; ++i){
    let row= "";
    for (let j = 0; j < mat1[i].length; ++j) {
        row += mat1[i][j];
        row += "\t";
    }
    console.log(row);
} 


function matMul(mat1, mat2) {

    // return mul;
}