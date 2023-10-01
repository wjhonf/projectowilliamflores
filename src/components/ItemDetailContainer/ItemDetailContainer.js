import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
function DetalleItemContainer() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  useEffect(() => {
    async function cargarItem() {
      try {
        const conexion = await fetch("/equipos.json");
        console.log(itemId);
        const data = await conexion.json();
        const itemSeleccionado = data.find((elemento) => elemento.id == parseInt(itemId));
        console.log(itemSeleccionado);
        setItem(itemSeleccionado);
      } catch (e) {
        console.log('No se pudo cargar los datos:', e);
      }
    }
    cargarItem();
  }, [itemId]);
  return (
    <div>
      {item ? (
        <div className="container">
          <br />
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card">
                <button className="btn btn-success btn-sm">Detalle Equipo</button>
                <img
                  src={item.imagenEquipo}
                  className="card-img-top mx-auto"
                  alt={item.nombre}
                  style={{ maxWidth: '40%', maxHeight: '40%' }}
                />
                <div className="card-body text-center">
                  <h4>{item.nombre}</h4>
                  <p>Precio: s/ {item.precio}</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <button className="btn btn-success btn-sm">Comprar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Cargando Datos...</p>
      )}
    </div>
  );
}

export default DetalleItemContainer;
