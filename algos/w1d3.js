//combine two pre-sorted arrays into one sorted array
//return the newly combined array
//bonus challenge: combine in place into leftArr instead of a new array
const combine = (leftArr, rightArr) => {
}

// should return [0,1,2,3,4,6,7,9,11]
// console.log(combine([1,2,7,9],[0,3,4,6,11]));

// should return [0,1]
// console.log(combine([1],[0]));

const mergeSort = (arr) => {
    if(arr.length <=1) return arr;
    let half = Math.floor(arr.length/2);
    return combine(mergeSort(arr.slice(0, half)), mergeSort(arr.slice(half, arr.length)));
}