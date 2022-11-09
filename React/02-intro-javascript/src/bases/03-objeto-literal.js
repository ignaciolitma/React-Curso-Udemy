const persona = {
    nombre: "Tony",
    apellido: "Stark",
    edad: 45,
    direccion:{
        ciudad: 'New york',
        zip: 55321321,
        lat: 14.3232,
        lng: 34.9233321,
    }
};

// console.table(persona);
console.log(persona);

const persona2 = {...persona};

console.log(persona2);

persona2.nombre = 'Peter'

console.log(persona);
console.log(persona2);