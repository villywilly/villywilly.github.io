console.log('wow someone is usong a super awesome calculator\ni made'); // l random stuff
let doMoreMath=true; // tried to put this in a while loop but then it didnt it kept it kept doing it and broke the computer so i got rid of it but im lazy and kept this varialbe
let number1 = window.prompt('Enter the first number.'); // get first num
let operator = window.prompt('Enter the operator.'); // get operator like +-*/
let number2 = window.prompt('Enter the second number.'); // get second num
let rn1; // make them into numbers
let rop; // btw r stands for real
let rn2;
let ans; // answer
rn1 = Number(number1);
rn2 = Number(number2);
rop = operator;
const possibleOperators = ['+','-','/','*'] // get the possible operators to see if you r able to do the thing
function isGoodNumber(number,realNumber) {
    if (isNaN(realNumber)===true) { // figure out if your number is good
        window.alert(`Warning! Entered number <${number}> is invalid or not a number!`); // if its bad u gotta exit page and go back in and stuff
        console.log(`Warning! Entered number <${number}> is invalid or Not a Number!`);
        return false
    }
    else {
        return true
    }
}
function isGoodOperator(operatorr) {
    if (possibleOperators.includes(operatorr)) {
        return true;
    }
    else {
        return false;
    }
}
function evalu(num1,op,num2) {
    if (isGoodOperator(op) === false) {
        window.alert('Warning! Bad operator!'); // checks if you entered a good operator
        throw new Error('Bad operator');
    }
    else if (op === '+') {
        return num1+num2;
    }
    else if (op === '-') {
        return num1-num2;
    }
    else if (op === '*') {
        return num1*num2;
    }
    else if (op === '/') {
        return num1/num2;
    }
    else {
        return 'Warning! Bad operator' //redundent
    }
}
console.log(`Number entered <${rn1}>`);
if (isGoodNumber(number1,rn1) === false) { //see if num is good
    throw new Error("bad number"); //stops if bad number
}
else {
    console.log('good num'); // but if its good u can continue with the calculations!!!!!!!
    if (isGoodNumber(number2,rn2) === false) {
        throw new Error('bad number');
    }
    else {
        console.log('good number'); // both of the numbers are work now so finally, the momeny you all waited for, getting the result!!!!!!!!!!!!!!!!!!!!!
        ans = evalu(rn1,rop,rn2)
        console.log(ans)
        window.alert(`The answer is <${ans}>`)
    }
    
}
