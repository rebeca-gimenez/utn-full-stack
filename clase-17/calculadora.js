// Login
function validarEmail(email) {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
}
function validarPassword(password) {
    return (Boolean(password) && password.length > 6 && password != password.toLowerCase())
}
/*
Version larga

function obtenerEmail() {
    let email = prompt("Bienvenido, por favor ingrese su email: ", 'johndoe@gmail.com')
    while (!validarEmail(email)) {
        email = prompt("Error, por favor ingrese un email valido: ", 'johndoe@gmail.com')
    }
    alert('El email esta registrado: ' + email)
    return email
}
function obtenerPassword() {
    let password = prompt("Ingrese una contrasena de min 6 caracteres y 1 mayuscula: ")
    while (!validarPassword(password)) {
        password = prompt("Error, ingrese una contrasena de min 6 caracteres y 1 mayuscula: ")
    }
    alert('El password esta registrado: ' + password)
    return password
}
*/
function obtenerDato(infoDato) {
    let dato = prompt(infoDato.mensajeIngreso)
    while(!infoDato.validacion(dato)) {
        dato = prompt(infoDato.mensajeError)
    }
    return dato
}
const operacionesValidas = ['+','-']
function validarOperacion(operacion) {
    return operacionesValidas.includes(operacion)
}
function validarNumero(valor) {
    let numero = Number(valor)
    return Boolean(numero)
}
const DATOS = {
    EMAIL: {
        mensajeIngreso: 'Bienvenido. Ingrese su email:',
        mensajeError: 'Error, ingrese un email valido:',
        validacion: validarEmail
    },
    PASSWORD: {
        mensajeIngreso: 'Ingrese una contrasena de min 6 caracteres y 1 mayuscula:',
        mensajeError: 'Error, ingrese una contrasena de min 6 caracteres y 1 mayuscula:',
        validacion: validarPassword
    },
    OPERACION: {
        mensajeIngreso: 'Seleccione una operacion: +, -',
        mensajeError: 'Error, seleccione una operacion valida: +, -',
        validacion: validarOperacion
    },
    NUMERO1: {
        mensajeIngreso: 'Ingrese un numero:',
        mensajeError: 'Error, ingrese un numero: ',
        validacion: validarNumero
    },
    NUMERO2: {
        mensajeIngreso: 'Ingrese el segundo numero:',
        mensajeError: 'Error, ingrese el segundo numero: ',
        validacion: validarNumero
    }
}

function login() {
    let email = obtenerDato(DATOS.EMAIL)
    let password = obtenerDato(DATOS.PASSWORD)
    return { email: email, password: password}
}


//Calculadora

function ejecutarOperacion(operacion, numero1, numero2) {
    if (operacion == '+') {
        return Number(numero1) + Number(numero2)
    }
    return Number(numero1) - Number(numero2)
}
function calculadora() {
    let operacion = obtenerDato(DATOS.OPERACION)
    let numero1 = obtenerDato(DATOS.NUMERO1)
    let numero2 = obtenerDato(DATOS.NUMERO2)
    let resultado = ejecutarOperacion(operacion, numero1, numero2)
    alert('El resultado de ' + numero1 + operacion + numero2 + ' es ' + resultado)
}
calculadora()

//Solicita una operacion
//Es valida si es una de las operaciones validas
// Si es valida, solicitar nro 1.
// Validar que sea un numero
// Solicitar, nro 2
//En caso de elegir una '+'
//'el resultado de {numero1} {operacion} {numero 2} es {resultado}
//En caso de elegir una '-'
/*
let usuarios = [
    {
        email: 'email',
        historial: [],
    }
]
function agregarUsuarioAUsuarios (email) {
    usuarios.find(function (usuario){
        return usuario.email === email;
    })
    //Si el registro no contiene el email, agregarlo
    //Si el registro ya tiene el email, no hacer nada
}

/*
// Calculadora
//
function operacion() {
    let num1 = prompt("Ingresar el primer numero", 1);
    let num2 = prompt("Ingresar el segundo numero", 1);
    let operacion = prompt("Selecciona la operacion: '+' o '-'", '+');
}


const usuario = undefined
const historial = []
function crearUsuario() {

}
function llenarHistorial() {

}
*/