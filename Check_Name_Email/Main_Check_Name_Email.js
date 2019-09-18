let email_1 = "a@gmail.com";
let email_2 = ".asdfjhks@dsfhl.asdfsa";
let email_3 = "@fdgdf";

function check_name_email(str) {
    let regExp = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
    if (regExp.test(str)) {
        return true;
    }
    return false;
}

console.log(check_name_email(email_1));
console.log(check_name_email(email_2));
console.log(check_name_email(email_3));