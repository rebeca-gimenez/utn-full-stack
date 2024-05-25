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