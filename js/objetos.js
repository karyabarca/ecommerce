const objeto = {
    id:123,
    tipo:"camisa",
    color:"negro",
}

const {id,tipo,color} = objeto
console.log(id)

class Playeras{
    constructor(codigo,color,precio){
        this.codigo=codigo;
        this.color=color;
        this.precio=precio;
    }
}

let playeras = [
    new Playeras(0001,'blanco',834),
    new Playeras(0002,'azul', 130,)
]

console.log(...playeras) 
