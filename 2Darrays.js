// Create a 3x3 matrix
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Function to print the 2D array
function print2DArray(arr) {
    for (let row of arr) {
        console.log(row.join(" "));
    }
}

// Function to calculate the sum of all elements
function sum2DArray(arr) {
    let sum = 0;
    for (let row of arr) {
        for (let num of row) {
            sum += num;
        }
    }
    return sum;
}

// Function to modify a value at a given row and column index
function modify2DArray(arr, row, col, newValue) {
    if (row >= 0 && row < arr.length && col >= 0 && col < arr[row].length) {
        arr[row][col] = newValue;
    } else {
        console.log("Invalid index");
    }
}

// Function to find the maximum value in the 2D array
function findMax(arr) {
    let max = arr[0][0];
    for (let row of arr) {
        for (let num of row) {
            if (num > max) {
                max = num;
            }
        }
    }
    return max;
}

// Function to transpose the 2D array
function transpose(arr) {
    let transposed = [];
    for (let i = 0; i < arr[0].length; i++) {
        transposed[i] = [];
        for (let j = 0; j < arr.length; j++) {
            transposed[i][j] = arr[j][i];
        }
    }
    return transposed;
}

// Test all functions
console.log("Original Matrix:");
print2DArray(matrix);

console.log("\nSum of all elements:", sum2DArray(matrix));

modify2DArray(matrix, 1, 1, 99);
console.log("\nMatrix after modification:");
print2DArray(matrix);

console.log("\nMaximum value in matrix:", findMax(matrix));

let transposedMatrix = transpose(matrix);
console.log("\nTransposed Matrix:");
print2DArray(transposedMatrix);
