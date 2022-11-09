const personajes = ["Goku", "Vegeta", "Trunks"];
const [, , p3] = personajes;
console.log(p3);

const retornoArreglo = function ()
{
    return ["ABC", 123];
}

const [letras, numero] = retornoArreglo();
console.log(letras, numero);

// Tarea
// 1. el primer valor del arr se llamará nombre
// 2. el segundo valor del arr se llamará SetNombre
const usarState = (valor) =>
{
    return [valor, () => { console.log("Hola Mundo") }];
}

const [nombre, SetNombre] = usarState("Goku");
console.log(nombre);
SetNombre();