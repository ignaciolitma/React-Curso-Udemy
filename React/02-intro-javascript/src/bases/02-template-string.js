const nombre = "Ignacio";
const apellido = "Litmanovich";

const nombreApellido = `${nombre} ${apellido} ${1 + 1 === 2}`

console.log(nombreApellido);

function getSaludo(nombre)
{
    return "Hola " + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`)
