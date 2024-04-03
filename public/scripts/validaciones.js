const formulario = document.querySelector("#formulario");
const inputs = document.querySelectorAll(".inputs");

const expresiones = {
	username: /^[a-zA-Z0-9\_\-]{8,20}$/,
	password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,50}$/,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const validarFormulario = (e)=>{
    switch (e.target.name){
        case "username":
            if(expresiones.username.test(e.target.value)){
                document.getElementById("username").classList.remove("inputsIncorrecto");
                document.getElementById("invalidUsername").style.display = "none";
            }
            else{
                document.getElementById("username").classList.add("inputsIncorrecto");
                document.getElementById("invalidUsername").style.display = "block";
            }
        break;
        case "email":
            console.log("gol");
            if(expresiones.email.test(e.target.value)){
                document.getElementById("email").classList.remove("inputsIncorrecto");
                document.getElementById("invalidEmail").style.display = "none";
            }
            else{
                document.getElementById("email").classList.add("inputsIncorrecto");
                document.getElementById("invalidEmail").style.display = "block";
            }
        break;
        case "password":
            if(expresiones.password.test(e.target.value)){
                document.getElementById("password").classList.remove("inputsIncorrecto")
                document.getElementById("invalidPassword").style.display = "none";
            }
            else{
                document.getElementById("password").classList.add("inputsIncorrecto")
                document.getElementById("invalidPassword").style.display = "block";
            }
        break;
        case "passwordConfirm":
            if(e.target.value == document.getElementById("password").value){
                document.getElementById("passwordConfirm").classList.remove("inputsIncorrecto");
                document.getElementById("invalidConfirmPassword").style.display = "none";
            }
            else{
                document.getElementById("passwordConfirm").classList.add("inputsIncorrecto")
                document.getElementById("invalidConfirmPassword").style.display = "block";
            }
        break;
    }
}

inputs.forEach((input) =>{
    input.addEventListener("blur", validarFormulario)
})