function isUsZipcode(str) {
    let regExp = /^[0-9]{5}(?:-[0-9]{4})?$/;
    if (regExp.test(str)) {
        return true;
    }
    return false;
}
let inputZipCode = "03201 - 2150";
let inputZipCode_2 = "7892";
console.log(isUsZipcode(inputZipCode_2));