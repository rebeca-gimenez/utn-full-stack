//Comentario de una linea
/*Comentario de
varias
lineas */

//Crear variable
let message;        //nombre de la variable
message = 'Hello';  //guardar valor en la variable
alert(message)      //mostrar el valor de la variable

//Crear variable, version corta
/*
let message = 'Hello';

//Declarar varias variables
let uset = 'John', age = 25, message = 'Hello';

let uset = 'John'
    , age = 25
    , message = 'Hello';

let uset = 'John';
let age = 25;
let message = 'Hello';

*/

//Variables que nunca van a cambiar
const aConstant = 'Hi';

/*Alias para valores dificiles de recordar que se 
conocen antes de ejecutar en Mayusculas*/
const COLOR_RED = '#F00';


//Data types

// Primitive

//Number
//Special numeric values: Infinity, -Infinity, NaN
//NaN is sticky, it propagates. Only exception is NaN**0 = 1

//String

//Boolean

//Null: Nothing, empty, value unknown

//Undefined: value is not assigned
//Reserved as a default initial value for unassgined things

//Prompts
let age = prompt('How old are you?', 100);

alert(`You are ${age} years old!`); // You are 100 years old!

//Alert
/* alert automatically converts any value to a string
to show it. Mathematical operations convert values to numbers.
*/

