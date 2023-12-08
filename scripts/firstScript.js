console.log("Hello world");

function add7(number){
    return number+7;
}

function multiply(numOne, numTwo){
    return numOne * numTwo;
}

function capitalize(str){
    const firstLetter = str.charAt(0).toUpperCase();
    return  firstLetter + str.slice(1).toLowerCase();
}

function lastLetter(str){
    return str.slice(-1);
}