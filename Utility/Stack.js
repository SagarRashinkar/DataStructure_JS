const input = require('readline-sync');
class Stack {
    
    constructor(){
        this.items = [];
        this.count = 0;
    }

    stackOperations(){
        do{
            console.log("1=>Add element");
            console.log("2=>Remove element");
            console.log("3=>Print top element");
            console.log("4=>Print Complete stack");
            console.log("5=>Check stack is empty or not");
            console.log("6=> Exit!!!");
            const choice = input.questionInt("Enter your choice: ");

            switch(choice) {
                case 1:
                    const value = input.questionInt("How many elements you want to add: ");
                    for(var i=0; i<value; i++){
                        let element = input.questionInt(`enter element ${i+1}: `);
                        stack.push(element);
                    }
                    console.log("Elemnts in stack are: ");
                    stack.printStack();
                break;
                case 2:
                    stack.pop();
                    stack.printStack();
                break;
                case 3:
                    stack.peekElement();
                break;
                case 4:
                    stack.printStack();
                break;
                case 5:
                    stack.isEmpty();
                default:
                    System.exit();
                break;

            }
        }while(this.choice !== 6);
    }
    push(element) {
        this.items[this.count] = element;
        console.log(`${element} inserted to index ${this.count}`);
        this.count++;
        return this.count-1;
    }
    pop(){
        if(this.count == 0)
            return "Stack is empty";
        let deleteItem = this.items[this.count -1];
        this.count = -1;
        console.log(`item ${deleteItem} is deleted`);
        return deleteItem;
    }
    printStack(){
        for(var i=0; i<this.count; i++){
            console.log(`${this.items[i]}`);
        }
    }
    peekElement(){
        console.log(`Top element is ${this.items[this.count -1]}`);
        //return this.items[this.count -1];
    }
    isEmpty(){
        console.log(this.count == 0 ? 'Stack is empty' : 'Stack is not empty');
    }
}
const stack = new Stack();

module.exports = new Stack();