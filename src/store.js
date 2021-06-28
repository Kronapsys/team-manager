import { createStore } from 'redux';

// Data
const initialState = {
    jugadores: [{
        id: 1,
        nombre: 'Unai Simón',
        foto: 'https://i.imgur.com/R1mq1wC.png'
    },
    {
        id: 2,
        nombre: 'Marcos Llorente',
        foto: 'https://i.imgur.com/FphE6Kk.png'
    },
    {
        id: 3,
        nombre: 'Pau Torres',
        foto: 'https://i.imgur.com/zRTTsPQ.png'
    },
    {
        id: 4,
        nombre: 'Laporte',
        foto: 'https://i.imgur.com/Y2SGgPO.png'
    },
    {
        id: 5,
        nombre: 'Gayá',
        foto: 'https://i.imgur.com/mID0o6b.png'
    },
    {
        id: 6,
        nombre: 'Rodri',
        foto: 'https://i.imgur.com/vQWyanN.png'
    },
    {
        id: 7,
        nombre: 'Pedri',
        foto: 'https://i.imgur.com/FYykFS2.png'
    },
    {
        id: 8,
        nombre: 'Fabián',
        foto: 'https://i.imgur.com/0Ad7XwS.png'
    },
    {
        id: 9,
        nombre: 'Oyarzábal',
        foto: 'https://i.imgur.com/G11mK34.png'
    },
    {
        id: 10,
        nombre: 'Gerard',
        foto: 'https://i.imgur.com/gODXSpa.png'
    },
    {
        id: 11,
        nombre: 'Morata',
        foto: 'https://i.imgur.com/nPgkJ97.png'
    },
    {
        id: 12,
        nombre: 'David De Gea',
        foto: 'https://i.imgur.com/lR4a1S5.png'
    },
    {
        id: 13,
        nombre: 'Robert Sánchez',
        foto: 'https://i.imgur.com/05Dv3P3.png'
    },
    {
        id: 14,
        nombre: 'Eric García',
        foto: 'https://i.imgur.com/VtiAR0P.png'
    },
    {
        id: 15,
        nombre: 'César Azpilicueta',
        foto: 'https://i.imgur.com/YGierMY.png'
    },
    {
        id: 16,
        nombre: 'Jordi Alba',
        foto: 'https://i.imgur.com/ZRhbpvz.png'
    },
    {
        id: 17,
        nombre: 'Diego Llorente',
        foto: 'https://i.imgur.com/6QfvENJ.png'
    },
    {
        id: 18,
        nombre: 'Sergio Busquets',
        foto: 'https://i.imgur.com/fQU50eJ.png'
    },
    {
        id: 19,
        nombre: 'Thiago Alcántara',
        foto: 'https://i.imgur.com/RxtIkFE.png'
    },
    {
        id: 20,
        nombre: 'Koke Resurrección',
        foto: 'https://i.imgur.com/hEP6Rn1.png'
    },
    {
        id: 21,
        nombre: 'Dani Olmo',
        foto: 'https://i.imgur.com/1MPTmQ2.png'
    },
    {
        id: 22,
        nombre: 'Adama Traoré',
        foto: 'https://i.imgur.com/G7VJHJa.png'
    },
    {
        id: 23,
        nombre: 'Pablo Sarabia',
        foto: 'https://i.imgur.com/LsxXuJu.png'
    },
],
    titulares: [],
    suplentes: []
}

// La función reductora, recibe 2 parametros, el primero es el estado actual de la App y un objecto (action) que será
// el encargador de efectuar ese cambio en el estado.
// Ponemos state = initialState por si acaso al cargar por primera vez la App fuese undefined y nosotros no podemos devolver un valor
// undefined, así le damos un valor por defecto
const reducerEntrenador = (state = initialState, action) => {
    if(action.type === "AGREGAR_TITULAR") {
        return {
            ...state,
            titulares: state.titulares.concat(action.jugador)
        }
    }

    return state; // devuelve el nuevo estado
}

// Exportamos createStore, pero debe recibir por parámetro otra función que será la encargada de
// realizar los cambios en nuestra App (funcion reductora => reducerEntrenador)
export default createStore(reducerEntrenador);