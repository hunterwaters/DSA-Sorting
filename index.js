

//Merge Sort
function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length)

    left = mergeSort(left);
    right = mergeSort(right);
    return mergeSort(left, right, array)
}

function merge(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        }
        else {
            array[outputIndex++] = right[rightIndex++]
        }
    }
    for (i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i];
    }
    for (i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i];
    }
    return array;
};

//QuickSort
function quickSort(array, start = 0, end = array.length) {
    if(start >= end) {
        return array;
    }
    const middle = partition(array, start, end);
    array = quickSort(array, start, middle);
    array = quickSort(array, middle + 1, end);
    return array;
}

//Partitioning algorithms
//Lomuto's algorithm
function partition(array, start, end) {
    const pivot = array[end - 1];
    let j = start;
    for (let i = start; i < end - 1; i ++) {
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++
        }
    }
    swap(array, end-1, j);
    return j;
}
