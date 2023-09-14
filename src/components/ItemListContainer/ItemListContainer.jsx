import React from 'react';
import { Item } from '../Item/Item';
import { useState } from 'react';
function ItemListContainer({ greeting }) {
  const [equipos, setEquipos] = useState([]);

  const listaEquipos = [
    {
      cod: 1,
      equipo: 'laptop',
    },
    {
      cod: 2,
      equipo: 'PC',
    },
  ];
  const verequipo = () => {
    setEquipos(listaEquipos); 
    console.log(listaEquipos);
  };
  return (
    <div className="container">
      <h2>{greeting}</h2>
      <button className="btn btn-primary" onClick={verequipo}>
        Ver Equipos
      </button>
      <div className="row">
        {equipos.map((equipo) => (
          <div className="col-md-6" key={equipo.cod}>
            <Item equipo={equipo.equipo} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default ItemListContainer;
