const fData = {
    params: [
        'a', 'b'
    ],
    body: [
        'const r = a + b',
        'return r'
    ]
}

const fBody = fData.body.reduce((acc, cur) => {
    acc += cur + ';';
    return acc;
}, '');

// console.log(fBody)

const tf = new Function(...fData.params, fBody);

// console.log(tf(5, 10))

const greetFn = new Function('name', 'email', `
    const fName = name.split(' ')[0];
    console.log('Hello ' + fName + ', Is this your email? ' + email)
    console.log('Yeah this is my email');
`);

// greetFn('Muaz', 'md@muaz.com');

/**
 * How can a function be used during runtime -
 */
const operations = [
    {
        args: [10, 20],
        params: ['a', 'b'], 
        body: 'console.log("a + b = ", a + b)'
    },
    {
        args: [10, 20],
        params: ['a', 'b'], 
        body: 'console.log("a - b = ", a - b)'
    },
    {
        args: [10, 20],
        params: ['a', 'b'], 
        body: 'console.log("a * b = ", a * b)'
    },
    {
        args: [10, 20],
        params: ['a', 'b'], 
        body: 'console.log("a / b = ", a / b)'
    }
]

operations.forEach(item => {
    const fn = new Function(...item.params, item.body)
    fn(...item.args)
})

/**
 * A Recursive function for sumation of fibonacci numbers -
 */
