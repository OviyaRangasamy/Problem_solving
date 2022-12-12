/**
 * Get the array and the k value
 * sort the array
 * get the smallest value as the array[k-1]
 * get the largest as array[length - k]
 */

function findKthValue(arr, k) {
    let sorted_array = arr.sort(function (a, b) { return a - b });
    let obj = {}
    obj.small = sorted_array[k - 1]
    obj.large = sorted_array[sorted_array.length - k]
    return (obj)
}


console.log(findKthValue([2, 1, 4, 3, 6, 5, 7], 3))