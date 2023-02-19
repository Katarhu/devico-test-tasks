

// TASK #3
// Make a function that takes a number n, and returns a two-dimensional
// array with length n*n, with 2 on the diagonal and 1 on the top and bottom of
// the resulting segment

const DEFAULT_SYMBOL = 0;
const DEFAULT_OUTER_SYMBOL = 2;
const DEFAULT_INNER_SYMBOL = 1;


const generateRow = (arrayLength, columnIndex) => {
    const row = Array(arrayLength).fill(DEFAULT_SYMBOL);

    const lastItemIndex = arrayLength - 1;
    const arrayMidIndex = Math.trunc(arrayLength / 2)

    const currentColumnIndex = columnIndex > arrayMidIndex ?
        lastItemIndex - columnIndex :
        columnIndex;

    for (let i = 0; i < arrayLength; i++) {
        if (i === currentColumnIndex || i === lastItemIndex - currentColumnIndex) {
            row[i] = DEFAULT_OUTER_SYMBOL;
            continue;
        }
        if (i > currentColumnIndex && i < lastItemIndex - currentColumnIndex) {
            row[i] = DEFAULT_INNER_SYMBOL;
        }
    }

    return row;
}

const bar = (n) => {
    const result = [];

    for (let i = 0; i < n; i++) {
        result[i] = generateRow(n, i);
    }

    return result;
}

// console.log(bar(9));
// console.log(bar(8));
// console.log(bar(7));
// console.log(bar(6));
console.log(bar(5));
console.log(bar(4));
// console.log(bar(3));
// console.log(bar(2));
// console.log(bar(1));