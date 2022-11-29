/**
 * 
 * @param {Array} arr 
 * @returns id for an a newly created obj
 */
function generateID(arr) {
    if(arr.length == 0) return 1
    return arr[arr.length - 1].id + 1;
}

/**
 * @property todoList
 * @method addItem
 * @method updateItem
 * @method done
 * @method next
 * @method find
 * @method list
 */
class Todo {
    constructor(todoList=[]) {
        this.todoList = todoList;
    }

    addItem(text) {
        const item = {
            id: generateID(this.todoList),
            text: text,
            createdAt: new Date()
        }
        this.todoList.push(item);
    }

    update(id, text) {
        for (let i = 0; i < this.todoList.length; i++) {
            if(this.todoList[i].id === id) {
                this.todoList[i].text = text;
                break;
            }
        }
    }

    done() {
        return this.todoList.shift();
    }

    next() {
        return this.todoList[0];
    }

    find(term) {
        const result = [];
        for (let i = 0; i < this.todoList.length; i++) {
            const item = this.todoList[i];
            if(item.text.toLowerCase().includes(term.toLowerCase())) {
                result.push(item);
            }
        }
        return result;
    }

    list() {
        return this.todoList;
    }
}

module.exports = Todo;