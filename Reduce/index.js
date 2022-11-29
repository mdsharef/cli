// let votes = [
//     'java', 'javascript', 'python', 'java', 'python', 'java', 'python'
// ]

// const myReduceDemo = (arr, initial=0) => {
//     let accumulator = initial
//     for (let i = 0; i < arr.length; i++) {
//         if(accumulator[arr[i]]) {
//             accumulator[arr[i]]++;
//         } else {
//             accumulator[arr[i]] = 1
//         }
//     }
//     return accumulator;
// }

// const myReduce = (arr, cb, init) => {
//     let acc = init, start = 0;
//     if(!init) {
//         acc = arr[0];
//         start = 1;
//     }
//     for (let i = start; i < arr.length; i++) {
//         acc = cb(acc, arr[i], i, arr)
//     }
//     return acc;
// }

// console.log(myReduceDemo(votes, {}));

// const reducedRes = myReduce(votes, (acc, cur)=> {
//     if(acc[cur]) {
//         acc[cur]++;
//     } else {
//         acc[cur] = 1;
//     }
//     return acc;
// }, {})
// console.log(reducedRes);

// const numArr = [1, 2, 3, 4, 5]

// const sum = myReduce(numArr, (acc, cur) => {
//     return acc + cur
// })
// console.log(sum)

// const arrOfArr = [[1, 2], [3, 4, 5], 4, [4, 6]]

// const concatArr = myReduce(arrOfArr, (acc, cur) =>{
//     return acc.concat(cur);
// }, [])
// console.log(concatArr)

/**
 * reduceRight function Implimentation
 */

// const myReduceRight = (arr, cb, init) => {
//     let acc = init, start = arr.length - 1;
//     if(!init) {
//         acc = arr[arr.length - 1];
//         start--;
//     }
//     for(let i = start; i >= 0; i--) {
//         acc = cb(acc, arr[i], i, arr)
//     }
//     return acc;
// }

// const arrOfNum = [1, 2, 3, 4, 5, 10]

// const resultOfSumation = myReduceRight(arrOfNum, (acc, cur) => {
//     return acc + cur
// })
// console.log(resultOfSumation);

// const arrayOfArray = [[1, 2], [3, 4], [5, 6], [7, 8], 9, 10]

// const resultOfArrayOfArray = myReduceRight(arrayOfArray, (acc, cur) => {
//     return acc.concat(cur);
// }, []);
// console.log(resultOfArrayOfArray);

// const book = [
//     {name: 'JavaScript Cookbook', price: 350},
//     {name: 'Python', price: 450},
//     {name: 'JavaScript Cookbook', price: 350},
//     {name: 'Head First Java', price: 400},
//     {name: 'Python', price: 450},
//     {name: 'JavaScript Cookbook', price: 350},
//     {name: 'Head First Java', price: 400},
//     {name: 'Head First C', price: 300}
// ];

// const invoice = myReduceRight(book, (acc, cur) => {
//     if(acc[cur.name]) {
//         acc[cur.name].price += cur.price;
//         acc[cur.name].quantity++;
//     } else {
//         acc[cur.name] = {
//             price: cur.price,
//             quantity: 1
//         }
//     }
//     return acc;
// }, {})

// using defoult reduce function
// const invoice2 = book.reduce((acc, cur) => {
//     if(acc[cur.name]) {
//         acc[cur.name].price += cur.price;
//         acc[cur.name].quantity++;
//     } else {
//         acc[cur.name] = {
//             price: cur.price,
//             quantity: 1
//         }
//     }
//     return acc;
// }, {})

// console.log('[myReduceRight]- ', invoice)
// console.log('[Reduce]- ', invoice2)

// const bigArray = [];
// for (let i = 0; i < 50000000; i++) {
//     bigArray.push(i)
// }

// console.time('Both');
// bigArray.filter(v => v % 2 === 0).map(v => v * 2);
// console.timeEnd('Both');

// console.time('Reduce');
// bigArray.reduce((acc, cur) => {
//     if(cur % 2 === 0) {
//         acc.push(cur * 2)
//     }
//     return acc;
// }, []);
// console.timeEnd('Reduce');

// const courses = [
//     {
//         id: 'OC1',
//         name: 'Teaching JavaScript',
//         topic: 'JavaScript',
//         price: 2599
//     },
//     {
//         id: 'OC2',
//         name: 'Teaching React',
//         topic: 'React',
//         price: 3500
//     },
//     {
//         id: 'OC3',
//         name: 'Teaching Python',
//         topic: 'Python',
//         price: 2000
//     },
//     {
//         id: 'OC4',
//         name: 'Teaching Java',
//         topic: 'Java',
//         price: 3000
//     },
//     {
//         id: 'OC5',
//         name: 'Teaching NodeJs',
//         topic: 'NodeJs',
//         price: 4000
//     },
//     {
//         id: 'OC6',
//         name: 'Teaching TypeScript',
//         topic: 'TypeScript',
//         price: 1500
//     },
//     {
//         id: 'OC7',
//         name: 'Teaching C',
//         topic: 'C',
//         price: 4500
//     },
//     {
//         id: 'OC8',
//         name: 'Teaching Array',
//         topic: 'Array',
//         price: 2700
//     }
// ];

// const discountedPrice = {
//     OC1: 1000,
//     OC2: 1500,
//     OC4: 2000,
//     OC6: 1000,
//     OC7: 2500,
//     OC8: 2500,
// }

// const updatedCourses = []

// for(let i = 0; i < courses.length; i++) {
//     if(discountedPrice[courses[i].id]) {
//         const item = {
//             ...courses[i],
//             discountPrice: discountedPrice[courses[i].id]
//         }
//         updatedCourses.push(item)
//     } else {
//         const item = {
//             ...courses[i],
//             discountPrice: 0
//         }
//         updatedCourses.push(item);
//     }
// }

// console.log(updatedCourses)

/**
 * Using Reduce Function
 */
// const discountedCourses = courses.reduce((acc, cur) => {
//     if (discountedPrice[cur.id]) {
//         cur.discountPrice = discountedPrice[cur.id];
//     } else {
//         cur.discountPrice = 0
//     }
//     acc.push(cur);
//     return acc;
// }, []);

// console.log(discountedCourses)

/**
 * Reduce function impliment and create an obj holding name of first latter -
 */
const myReduce = (arr, cb, init) => {
    let acc = init, start = 0;

    if(!init) {
        acc = arr[0]
        start = 1;
    }

    for (let i = start; i < arr.length; i++) {
        acc = cb(acc, arr[i], i, arr)
    }
    return acc;
}

const contacts = [
    { 
        name: 'Arif',
        city: 'Dhaka',
        mobile: '01732456745'
    },
    { 
        name: 'Azad',
        city: 'Dhaka',
        mobile: '01742456745'
    },
    { 
        name: 'Amin',
        city: 'Sylhet',
        mobile: '01732476745'
    },
    { 
        name: 'Anoar',
        city: 'Dhaka',
        mobile: '01735456745'
    },
    { 
        name: 'Balal',
        city: 'Noakhali',
        mobile: '01732956745'
    },
    { 
        name: 'Bulbul',
        city: 'Rajshahi',
        mobile: '01732456741'
    },
    { 
        name: 'Chayon',
        city: 'Dhaka',
        mobile: '01732451745'
    },
    { 
        name: 'Dulal',
        city: 'Hatiya',
        mobile: '01632456745'
    },
    { 
        name: 'Faruq',
        city: 'Sylhet',
        mobile: '01732436745'
    },
    { 
        name: 'Nishan',
        city: 'Dhaka',
        mobile: '01732456045'
    },
    { 
        name: 'Kamrul',
        city: 'Hatiya',
        mobile: '01730456745'
    },
    { 
        name: 'Jihad',
        city: 'Dhaka',
        mobile: '01732456740'
    },
    { 
        name: 'Sarafat',
        city: 'Dhaka',
        mobile: '01932456745'
    },
    { 
        name: 'Muaz',
        city: 'Dhaka',
        mobile: '01532456745'
    },
    { 
        name: 'Rakib',
        city: 'GAzipur',
        mobile: '01332456745'
    }
]

const result = myReduce(contacts, (acc, cur) => {
    let term = cur.name.split('')
    if (acc[term[0]]) {
        acc[term[0]] = [...acc[term[0]], cur]
    } else {
        acc[term[0]] = [ cur ]
    }
    return acc;
}, {})

Object.keys(result).forEach(key => {
    console.log('------------ ', key, ' ------------');
    result[key].forEach(v => console.log(`Name: - ${v.name} ---- Mobile: - ${v.mobile}`))
    console.log('\n')
})
// console.log(result)