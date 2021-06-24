import { createStore } from 'redux';

// Data
const initialState = {
    jugadores: [],
    titulares: [],
    suplentes: []
}

// La función reductora, recibe 2 parametros, el primero es el estado actual de la App y un objecto (action) que será
// el encargador de efectuar ese cambio en el estado.
// Ponemos state = initialState por si acaso al cargar por primera vez la App fuese undefined y nosotros no podemos devolver un valor
// undefined, así le damos un valor por defecto
const reducerEntrenador = (state = initialState, action) => {

    return state; // devuelve el nuevo estado
}

// Exportamos createStore, pero debe recibir por parámetro otra función que será la encargada de
// realizar los cambios en nuestra App (funcion reductora => reducerEntrenador)
export default createStore(reducerEntrenador);