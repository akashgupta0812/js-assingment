
let num1=prompt("enter the first number");
let num2=prompt("enter the second number");
let operation=prompt("enter the operations like +,-,/,*")

let result=0;
switch(operation)
{
    case '+':
        result=num1+num2;
        break;
        // return result;
        case '-':
        result=num1-num2;
        break;
        case '*':
        result=num1*num2;
        break;
        case '/':
        result=num1/num2;
        default:
            alert("invalid operation")
        // return result

}
alert(`thr result is ${result}`)
// console.log(`result is ${result}`);