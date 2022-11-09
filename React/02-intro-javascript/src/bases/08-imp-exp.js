// import { heroes } from "./data/heroes.js";
// import {heroes} from './data/heroes';

import heroes, { owners } from "../data/heroes";

//console.log(owners);

// const getHeroeById = function (id)
// {
//     return heroes.find(x => x.id == id);
// }

// const getHeroeById = function (id)
// {
//     return heroes.find((heroes) =>
//     {
//         if (heroes.id === id)
//         {
//             return true;
//         } else
//         {
//             return false;
//         }
//     });
// }

// const getHeroeById = function (id)
// {
//     return heroes.find( (heroe) => heroe.id === id);
// }

const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

//console.log(getHeroeById(2));

export const getHeroeByOwnner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

//console.log(getHeroeByOwnner("DC"));
//console.log(getHeroeByOwnner("Marvel"));
export default getHeroeById;