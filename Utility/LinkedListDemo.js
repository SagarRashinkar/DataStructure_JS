const userInput = require('readline-sync');

class Node{
    constructor(data, next=null) {
        this.data = data;
        this.next = next;
    }
}
class LinkedListDemo {
    constructor(){
        this.head = null;
        this.size = 0;
    }
    llOperations(){
        do{
            console.log("-----------------------------");
            console.log("1=> Add First");
            console.log("2=> Add Last");
            console.log("3=> Remove element");
            console.log("4=> Display LinkedList");
            console.log("5=> Exit");
            let choice = userInput.questionInt("Enter your choice: ");
            
            switch(choice){
                case 1:
                    var val = userInput.questionInt("How many elements:");
                    console.log(`enter ${val} elements:`);
                    
                    for(var i=0; i<val; i++){
                        var value = userInput.questionInt("enter element: ");
                        this.insertFirst(value);
                    }
                break;
                case 2:
                    var val = userInput.questionInt("How many elements:");
                    console.log(`enter ${val} elements:`);
                    
                    for(var i=0; i<val; i++){
                        var value = userInput.questionInt("enter element: ");
                        this.insertLast(value);
                    }
                break;
                case 3:
                    let index = userInput.questionInt("Enter index to delete element: ");
                    this.removeElement(index);
                break;
                case 4:
                    this.display();
                break;
                case 5:
                    console.log("Exiting!!!!!!");
                break;
            }
        }while(this.choice!==5);
    }
    // insert the element at first
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }
    //insert the element at last
    insertLast(data) {
        let node = new Node(data);
        let current;

        //check if stack is empty
        if(!this.head){
            this.head = node;
        }
        else{
            current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = node;
        }
    this.size++;
    }
    removeElement(index){
        if(index > 0 && index > this.size){
            return;
        }
        let current = this.head;
        let previous;
        let count = 0;

        //remove first
        if(index ===0){
            this.head = current.next;
        }
        else{
            while(count < index){
                count++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.size--;
    }
    display() {
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}
const ll = new LinkedListDemo();

module.exports = new LinkedListDemo();