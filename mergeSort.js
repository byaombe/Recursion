//takes in an array and returns a sorted array, 
// using a recursive merge sort methodology
//An input of [3, 2, 1, 13, 8, 5, 0, 1] 
// should return [0, 1, 1, 2, 3, 5, 8, 13]

const mergeSort = (arr) => {
    if (arr.length <= 1) {
        return arr; // Return the array if it has one or zero elements
    }

    // Split the array into two halves
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Recursively sort the two halves
    return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
    let result = [];
    let i = 0, j = 0;

    // Compare elements from both halves and merge
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Add remaining elements from both halves
    return result.concat(left.slice(i)).concat(right.slice(j));
};


console.log(mergeSort([5, 3, 8, 4, 2, 7, 1])); // should Output: [1, 2, 3, 4, 5, 7, 8]
