const personajes = [
    {
        nombre: 'pepe',
        apellido: 'suarez',
        edad: 40
    },
    {
        nombre: 'maria',
        apellido: 'cassanova',
        edad: 20
    },
    {
        nombre: 'ezequiel',
        apellido: 'rodrigez',
        edad: 35
    },
]
/* 
Por cada personaje mostrar el siguente mensaje por consola
'Hola mi nombre es {personaje.nombre} {personaje.apellido} y tengo {personaje.edad} años'

Opcional:
Al finalizar el recorrido mostar por consola 'total de edades: {sumatoria de las edades de los usuarios}'

*/
sumaEdades = null
for (let index = 0; index < personajes.length; index++) {
    const personaje = personajes[index];
    sumaEdades += personaje.edad;
    console.log("Hola mi nombre es " + personaje.nombre + " " + personaje.apellido + " y tengo " + personaje.edad + " años");
}
console.log("total de edades: " + sumaEdades)

// Metodos avanzados de arrays

personajes.forEach(function (personaje) {
    console.log(personaje)
})

const personajesMayoresDeEdad = personajes.filter(function (personaje) {
    return personaje.edad >= 18
})

const productos = [
    {
        nombre: 'tv samsung',
        marca: 'samsung',
        id: 1,
        precio: 3000
    },
    {
        nombre: 'celular samsung',
        marca: 'samsung',
        id: 4,
        precio: 1100
    },
    {
        nombre: 'tV LG',
        marca: 'LG',
        id: 2,  
        precio: 2900
    },  
    {
        nombre: 'tv noblex',
        marca: 'noblex',   
        id: 3,  
        precio: 2300
    },
]

/* 
-Traer los productos que sean de precio inferior a 2950
-Traer los productos de la marca noblex
-Traer los productos que en su nombre incluyan el string 'tv'
*/
const productosFiltradosPorPrecio = productos.filter(function (producto) {
    return producto.precio < 2950;
})
console.log(productosFiltradosPorPrecio)
const productosFiltradosPorMarca = productos.filter(function (producto) {
    return producto.marca.toLowerCase() == 'noblex'.toLowerCase();
})
console.log(productosFiltradosPorMarca)
const productosFiltradosPorNombre = productos.filter(function (producto) {
    return producto.nombre.toLowerCase().includes('tv'.toLowerCase());
})
console.log(productosFiltradosPorNombre)

//Find
const personajePepe = personajes.find(function (personaje){
    return personaje.nombre === 'pepe'
})

/* MAP
Nos sirve para crear un array en base a otro array
Va a recorrer el array y por cada elemento la callback va a ejecutarse
El valor de retorno de callback es el valor del nuevo elemento que se agregara al array resultante

RETORNA SIEMPRE UN ARRAY
*/


const objetos = [
    {
        nombre: 'vaso'
    },
    {
        nombre: 'tornillo'
    },
    {
        nombre: 'computadora'
    }
]

objetos.map(function (objeto){
    return '<div>'+ objeto.nombre + '<div>'
})

//some, every, findIndex