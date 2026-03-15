"use strict"                                                     //not chat btw :D
function findKthPositive(arr, kmissingnumber) { 
    let missingCount = 0;
    let current = 1;
    let i = 0;

    while (true) {
        if (i < arr.length && arr[i] === current) {
            i++;
        } else {
            missingCount++;
            if (missingCount === kmissingnumber) {
                return current;
            }
        }
        current++;
    }
}
let array = [2,3,4,7,11];
console.log(findKthPositive(array, 5));