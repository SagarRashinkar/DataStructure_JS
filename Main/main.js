const userInput = require('readline-sync');
const st = require('../Utility/Stack');
const ll = require('../Utility/LinkedListDemo');
const queue = require('../Utility/Queue');
const paren = require('../Utility/Parenthesys');

let value = userInput.question('Enter value: ');
paren.checkParenthesys(value);

//st.stackOperations();
//ll.llOperations();
//queue.operations();