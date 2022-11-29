const Stack = require('./index');

const stack = new Stack();

const text = 'Hello'; 

for (let i = 0; i < text.length; i++) {
    stack.push(text.charAt(i))
}

let reversed = ''

while(!stack.isEmpty()) {
    console.log(stack.peek());
    console.log('POPED!');
    console.log(stack);
    reversed += stack.pop();
}

console.log(reversed)
console.log(stack)
console.log(stack.peek())
