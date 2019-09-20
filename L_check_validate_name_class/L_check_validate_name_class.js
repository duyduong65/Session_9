
function checkValidateNameClass() {
    let regex = /^[CAP]+[0-9]{4}[GHIKLM]$/;
    if (regex.test(prompt("input String:"))){
        alert("accept");
    } else {
        alert("reject");
    }
}
checkValidateNameClass();