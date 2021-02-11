class Parenthesys {

    checkParenthesys(value) {
        console.log(value);
        let splitArray = value.split("");
        console.log("split values are: "+splitArray);
        let stack = [];
        splitArray.forEach(element => {
            switch (element) {
                case '(':
                    stack.push(element);
                    break;

                case '[':
                    stack.push(element);
                    break;

                case '{':
                    stack.push(element);
                    break;
            }

            switch (element) {
                case ')':
                    stack.pop(element);
                    break;

                case ']':
                    stack.pop(element);
                    break;
                    
                case '}':
                    stack.pop(element);
                    break;
            }
        });
        console.log(stack);
        if(stack.length==0){
            console.log("Parenthesis are Match");
        }
        else{
            console.log("Not Match");
        }
    }
}
module.exports = new Parenthesys()