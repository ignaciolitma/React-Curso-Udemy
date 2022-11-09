// Desestructuración
// Asignación Desestructurante.

const persona =
{
    nombre: "Tony",
    edad: 45,
    clave: "Ironman",
    //rango: "Soldado",
};

const {nombre, edad, clave} = persona;

const context = ({nombre, clave, edad, rango = "Capitán"}) => 
{
    //console.log(edad, nombre, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 14.1232,
            lng: -12.3232,
        }
    }
};

// Alternativa.
// const {nombreClave, anios, latlng:{ lat, lng } } = context(persona);
const {nombreClave, anios, latlng } = context(persona);
const {lat, lng} = latlng;

console.log(nombreClave, anios);
console.log(lat, lng);