
function checkValidateAccount() {
let regex = /^[_a-z0-9]{6,}$/;
    let inputAccount = prompt("Nhập vào số");
    if (!regex.test(inputAccount) ){
        console.log("reject");
    } else {
        console.log("accept");
    }
}
checkValidateAccount();