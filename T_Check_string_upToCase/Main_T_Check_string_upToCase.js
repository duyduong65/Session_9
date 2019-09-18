

function isFirstLetterUpperCase(str) {
    let regExp =/^[A-Z]/;
    if (regExp.test(str)){
        console.log("String's first character is UpperCase");
    } else {
        console.log("String's first character is'n UpperCase");
    }
}
let inputString = prompt("Input string: ");
isFirstLetterUpperCase(inputString);