let nombre = prompt('¿Cuál es tu nombre?')
let apellido = prompt('¿Cuál es tu apellido?')

localStorage.setItem('nombre', `El nombre es ${nombre} y el apellido es ${apellido}`)