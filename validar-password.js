/**
 * Minimo 8 caracteres
 * Maximo 15
 * Al menos una letra mayúscula
 * Al menos una letra minucula
 * Al menos un dígito
 * No espacios en blanco
 * Al menos 1 caracter especial
 *
 * @format
 */

const password = document.querySelector(".password");
const btnEnviar = document.querySelector(".enviar");

const regexp_password =
	/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;

function validarPasssword(input) {
	return regexp_password.test(input);
}

btnEnviar.addEventListener("click", (e)=>{
    const inputPassword = password.value;
    const isValid = validarPasssword(inputPassword);
    if(!isValid){
        e.preventDefault();
        alert("La contraseña debe tener Minimo 8 caracteres,Maximo 15, una mayúscula, una minúscula, un dígito, No espacios en blanco, al menos un carácter especial")
    }else{
        alert("El registro fue exitoso");
    }
})
