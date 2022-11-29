const Queue = require('./index');

const queue = new Queue();

const text = 'Hello'; 

for (let i = 0; i < text.length; i++) {
    queue.enqueue(text.charAt(i))
}

let dequeuedText = ''

while(!queue.isEmpty()) {
    console.log(queue.next());
    console.log('Shifted!');
    console.log(queue.showQueue());
    dequeuedText += queue.dequeue();
}

console.log(dequeuedText)
console.log(queue.showQueue())
console.log(queue.next())
console.log(queue)



/**
 * implimenting Filter, map, some & every function using traditional method
 */
// const myFilter = (arr, cb) => {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if(cb(arr[i], i, arr)) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }

// const myMap = (arr, cb) => {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result.push(cb(arr[i], i, arr))
//     }
//     return result;
// }

// const myEvery = (arr, cb) => {
//     const isTrueArr = [];
//     let isTrue = true;
//     for (let i = 0; i < arr.length; i++) {
//         if (cb(arr[i], i, arr)) {
//             isTrueArr.push(true);
//         } else {
//             isTrueArr.push(false);
//         }
//     }
//     for (let i = 0; i < isTrueArr.length; i++) {
//         if(isTrueArr[i] == false) {
//             return isTrue = false
//         }
//     }
//     return isTrue;
// }

// const mySome = (arr, cb) => {
//     const isTrueArr = [];
//     let isTrue = false;
//     for (let i = 0; i < arr.length; i++) {
//         if (cb(arr[i], i, arr)) {
//             isTrueArr.push(true);
//         } else {
//             isTrueArr.push(false);
//         }
//     }
//     for (let i = 0; i < isTrueArr.length; i++) {
//         if(isTrueArr[i] == true) {
//             return isTrue = true;
//         }
//     }
//     return isTrue;
// }

// const studentsArr = [
//     {
//         id: 1,
//         name: 'Muaz',
//         gpa: 4.00,
//         email: 'muaz@example.com',
//         due: false,
//         dueAmount: 0
//     },
//     {
//         id: 2,
//         name: 'Akash',
//         gpa: 3.00,
//         email: 'akash@example.com',
//         due: true,
//         dueAmount: 10000
//     },
//     {
//         id: 3,
//         name: 'Nishan',
//         gpa: 3.39,
//         email: 'nishan@example.com',
//         due: true,
//         dueAmount: 2000
//     },
//     {
//         id: 4,
//         name: 'Panna',
//         gpa: 4.00,
//         email: 'panna@example.com',
//         due: false,
//         dueAmount: 0
//     }
// ]

// const filteredArr = myFilter(studentsArr, (value, index, arr) => value.dueAmount > 0);

// console.log(filteredArr);

// const mappedArr = myMap(studentsArr, (value, index, arr) => {
//     return {
//         ...value,
//         title: `Hello ${value.name}, your result has been published!`,
//         msg: `Hello ${value.name}, your result has been published and you have got GPA-${value.gpa}. You have ${value.gpa > 3.50 ? 'passed' : 'failed'} the exam.`
//     }
// })

// console.log(studentsArr, mappedArr)

// console.log(mySome(studentsArr, (value) => value.gpa > 3.50));
// console.log(myEvery(studentsArr, (value) => value.gpa > 3.50));