import React from 'react';
import Provider from 'react-redux';
import store from './store'; 

const App = () => (

  <Provider store={store}>
    <main>
      <h1>team manager</h1>
      <Jugadores />
      <EquipoSeleccinado />
    </main>
  </Provider>
);

export default App;