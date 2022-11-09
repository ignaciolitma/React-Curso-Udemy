import getHeroeById, { getHeroeByOwnner } from "./bases/08-imp-exp";

// const promesa = new Promise((resolve, reject) =>
// {
//     setTimeout(() => {
//         //Tarea
//         const p1 = getHeroeById(2);
//         const owner = getHeroeByOwnner("DC");
//         resolve(p1)
//         //reject("No se pudo encontrar el heroe");
//     }, 2000);
// });


// promesa.then((heroe) => console.log(heroe))
// .catch(err => console.warn(err));

const getHeroeByIdAsync = (id) =>
{
    return new Promise((resolve, reject) =>
    {
        setTimeout(() =>
        {
            const p1 = getHeroeById(id);
            if (p1)
            {
                resolve(p1);
            } else
            {
                reject("No se pudo encontrar el héroe");
            }
        }, 2000);
    });
}

getHeroeByIdAsync(1)
    .then(console.log)
    .catch(console.warn);