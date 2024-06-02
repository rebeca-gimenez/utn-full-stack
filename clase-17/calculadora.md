### Calculadora

Funcionalidades:

CALCULADORA
- Soporte para las operaciones: Suma '+', Resta '-'

HISTORIAL
- Historial de operaciones

LOGIN
- Crear usuario al entrar a la calculadora
    - email, debe estar validado
- Solicitar password
    - Que no sea null, ''
    - Al menos una letra mayuscula
    - que tenga al menos 6 caracteres


Utilidades:
- Validar 
- Opcion de cancelar

Ingreso de datos:
- prompt

Egreso de datos:
- alert


LOGIN:

Prompt va a solicitar al usuario un email
Validamos que el email sea un email

RegEx / expresion regular: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(emailAVerificar) nos retorna un boolean
En caso de que no volvera a solicitar
En caso de que si sea valido dira email registrado {emailRegistrado}

una vez solicitado el email vamos a solicitar password
Valideremos que tenga una letra en mayuscula
que no sea null o ''
que tenga almenos 6 caracteres
En caso de que no volvera a solicitar
En caso de que si sea valido dira password registrada {password}

CALCULADORA
-tener soporte para las sig operacion: +, -
    -'+'
    -'-'

operacionesValidas = ['+', '-']

Solicitar una operacion:
La operacion es valida si es alguna de las operaciones validas 
Vamos a solicitar un numero 1: 
Validar que sea un numero
Vamos a solcitar un numero 2:
validar que sea un numero


En caso de elegir una '+'
Aca sumamos
Mostrar por alerta 'el resultado de {numero1} {operacion} {numero2} es {resultado}

En caso de elegir una '-'
Aca restamos
Mostrar por alerta 'el resultado de {numero1} {operacion} {numero2} es {resultado}


mati.​dev.​gimenez
  10:06 PM

HISTORIAL:

El historial debera tener el siguiente formato

Dado el siguiente array
historial = [
    {
        accion: 'CALCULAR',
        operacion: '+',
        a: 1,
        b: 2,
        resultado: 2 
    },
    {
        accion: 'CALCULAR',
        operacion: '+',
        a: 1,
        b: 2,
        resultado: 2 
    },
]


Crear una funcion llamada: renderizarHistorial(historial)

La funcion debera crear un string a partir del array con el siguiente formato y retornarlo:

'
El historial es:

Accion: CALCULAR
operacion: {operacion}
numeros: {a}, {b}
resultado: {resultado}

Accion: CALCULAR
operacion: {operacion}
numeros: {a}, {b}
resultado: {resultado}
'
Luego mostar el string resultante por alerta

Recuerda: puedes usar `` (template string para hacer saltos de linea) o '\n'
Ejemplo:
'El historial es:\n-hola' 
se vera como:
El historial es
-hola

o con template string:
`
El historial es
-hola
`
se vera como:
El historial es
-hola
New


const historial = [
    {
        accion: 'CALCULAR',
        operacion: '+',
        a: 1,
        b: 2,
        resultado: 2
    },
    {
        accion: 'CALCULAR',
        operacion: '-',
        a: 1,
        b: 2,
        resultado: -1
    },
    {
        accion: 'CALCULAR',
        operacion: '-',
        a: 1,
        b: 2,
        resultado: -1
    },
    {
        accion: 'CALCULAR',
        operacion: '-',
        a: 1,
        b: 2,
        resultado: -1
    },
    {
        accion: 'CALCULAR',
        operacion: '-',
        a: 1,
        b: 2,
        resultado: -1
    },
]

Crear una funcion llamada
elementoHistorial =  {
        accion: 'CALCULAR',
        operacion: '-',
        a: 1,
        b: 2,
        resultado: -1
    }
agregarAlHistorial(elementoHistorial)
Agregar el objeto al array global historial

obtenerHistorial() que va a retornar el historial global