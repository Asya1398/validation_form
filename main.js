function foo() {
    let Firstname = document.getElementById("Firstname").value;
    let Lastname = document.getElementById("Lastname").value;
    let Email = document.getElementById("Email").value;
    let Password = document.getElementById("Password").value;

    function validateName(name) {
        let validName = /^[a-zA-Z]{3,24}$/;
        return validName.test(name);
    }

    function validatePassword(pass) {
        let validPassword = /^(?=.*[*@_])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{3,24}$/;
        return validPassword.test(pass);
    }

    function validateEmail(email) {
        let validEmail =/^[a-z0-9.]+@[a-z0-9-]+(?:\.[a-z0-9-]{2,24})*$/;
        return validEmail.test(email);
    }

    if(validateName(Firstname) && Firstname[0] === Firstname[0].toUpperCase()){
        alert("OK");
    }else {
        alert("Invalid Firstname ")
    }

    if(validateName(Lastname) && Lastname[0] === Lastname[0].toUpperCase() && Lastname.endsWith('yan')){
        alert("OK");
    }else {
        alert("Invalid Lastname")
    }

    if (validateEmail(Email)) {
        alert("OK");
    } else {
        alert("Invalid Email")
    }

    if (validatePassword(Password)) {
        alert("OK");
    } else {
        alert("Invalid Password")
    }
}