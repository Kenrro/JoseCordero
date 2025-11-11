const numberRegex = /^\+?\d{7,15}$/;
const nameRegex = /^[a-zA-Z0-9._ñÑáéíóúÁÉÍÓÚ]{3,15}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
export const Regex = {
    name: (value) =>
        !nameRegex.test(value)? "Formato de nombre incorrecto":
        "",
    number: (value) =>
        !numberRegex.test(value)? "Formato de número incorrecto":
        "",
    email: (value) =>
        !emailRegex.test(value)? "Formato de email incorrecto":
        ""
}