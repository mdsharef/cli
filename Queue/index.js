const MAX_SIZE = 15;
class Queue {
    constructor() {
        this.list = new Array(MAX_SIZE);
        this.front = 0;
        this.rear = 0;
    }

    enqueue(item) {
        if (this.rear >= MAX_SIZE) {
            console.log('Queue Overflow!');
            return false;
        }
        this.list[this.rear++] = item;
        return true;
    }

    dequeue() {
        if(this.isEmpty()) {
            console.log('Queue Underflow!');
            return false;
        }
        const item = this.list[this.front];
        for (let i = this.front; i < this.rear - 1; i++) {
            this.list[i] = this.list[i + 1];
        }
        delete this.list[--this.rear]
        return item;
    }

    showQueue() {
        if(this.isEmpty()) {
            console.log('Queue Underflow!');
            return false;
        }
        for (let i = 0; i < this.rear; i++) {
            console.log(`[Displaying], ${this.list[i]}`);
        }
    }

    next() {
        if(this.isEmpty()) {
            console.log('Queue Underflow!');
            return false;
        }
        return this.list[this.front];
    }

    isEmpty() {
        return this.front == this.rear;
    }
}

module.exports = Queue;