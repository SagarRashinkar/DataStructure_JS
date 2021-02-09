const userInput = require('readline-sync');
// program to implement queue data structure
class Queue {
    constructor() {
        this.items = [];
    }
    operations(){
        do{
            console.log("1=> Insert elements");
            console.log("2=> Delete elements");
            console.log("3=> Peek element");
            console.log("4=> Is empty");
            console.log("5=> Size");
            console.log("6=> Clear");
            console.log("7=> Exit");
            var choice = userInput.questionInt("Enetr your choice:");
            switch(choice){
                case 1:
                    let num = userInput.questionInt("How many element you want to push: ");
            
                    for(var i=0; i<num; i++){
                        let value = userInput.questionInt("Enter number:");
                        queue.enqueue(value);
                    }
                    console.log("Elements of queue are: "+queue.items);
                break;
                case 2:
                    console.log("Deleting element from queue...");
                    console.log("Item is deleted: "+queue.dequeue());
                break;
                case 3:
                    console.log("Peek element is: "+queue.peek());
                break;
                case 4:
                    console.log("Is queue empty or not: "+queue.isEmpty());
                break;
                case 5:
                    console.log("Size of the queue is: "+queue.size());
                break;
                case 6:
                    console.log("Clearing the all elements of the queue... ");
                    queue.clear();
                break;
                case 7:
                    console.log("Exiting bye....");
                break;
            }

        }while(choice!=7);
    }
    // add element to the queue
    enqueue(element) {
        return this.items.push(element);
    }
    
    // remove element from the queue
    dequeue() {
        if(this.items.length > 0) {
            return this.items.shift();
        }
    }
    // view the last element
    peek() {
        return this.items[this.items.length - 1];
    }
    // check if the queue is empty
    isEmpty(){
       return this.items.length == 0;
    }
    // the size of the queue
    size(){
        return this.items.length;
    }
    // empty the queue
    clear(){
        this.items = [];
    }
}

let queue = new Queue();

module.exports = new Queue();