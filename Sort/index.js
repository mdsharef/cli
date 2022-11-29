const arr = [1, 3, 34, 65, 23, 45, 56, 90, 70, 71];

// for (let i = 0; i < arr.length -1; i++) {
//     for (let j = 0; j < arr.length - 1; j++) {
//         if(arr[j] > arr[j + 1]) {
//             let temp = arr[j]
//             arr[j] = arr[j + 1]
//             arr[j + 1] = temp;
//         }
//     }
// }

// console.log(arr);

/**
 * Implimenting Sort function-
 */
const bubbleSort = (arr, cb) => {
    for (let i = 0; i < arr.length -1 ; i++) {
        for(let j = 0; j < arr.length -1; j++) {
            if(cb(arr[j], arr[j + 1]) > 0) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

// console.log(arr);
// bubbleSort(arr, (cur , next) => {
//     return cur > next;
// });
// console.log(arr);
// bubbleSort(arr, (cur , next) => {
//     return cur < next;
// });
// console.log(arr);
// bubbleSort(arr, (cur, next) => cur - next)
// console.log(arr);

const team = [
    {id: 1, name: 'Muaz'},
    {id: 2, name: 'Faruq'},
    {id: 3, name: 'Jannat'},
    {id: 4, name: 'Arif'},
    {id: 5, name: 'Nishan'},
    {id: 6, name: 'Fatema'}
]

// console.log(team);
// bubbleSort(team, (cur, next) => cur.name > next.name)
// console.log(team);

/**
 * LenearSearch implimentation -
 */
const lenearSearch = (arr, cb) => {
    for(let i = 0; i < arr.length; i++) {
        if(cb(arr[i])) {
            return i; // will return index write return arr[i] for returning value
        }
    }
    return -1; // return undefined in case sending value
}

const index = lenearSearch(team, (v => v.name === 'Muaz'));
console.log(index);

/**
 * Implimenting Binary Search
 */
const binarySearch = (arr, key) => {
    let lowest = 0;
    let highest = arr.length - 1;
    while(lowest <= highest) {
        let mid = Math.floor((lowest + highest) / 2);
        if(arr[mid] === key) return mid;
        if(arr[mid] < key) lowest = mid + 1;  // mid= 10  key = 13
        if(arr[mid] > key) highest = mid - 1;
    }
    return -1; 
}

bubbleSort(arr, (cur, next) => cur - next)
const res = binarySearch(arr, 34);
console.log(res);
