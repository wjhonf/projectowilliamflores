import React, { useEffect, useState } from 'react';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
function DetalleItemContainer() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const [carrito, setCarrito] = useState([]);
  const db = getFirestore();
  const agregarAlCarrito = () => {
    if (item) {
      const itemAgregado = {
        id: item.id,
        nombre: item.nombre,
        cantidad: cantidad,
      };
      setCarrito([...carrito, itemAgregado]);
    }
  };
  useEffect(() => {
      async function cargarItem() {
      const equiposCollection = collection(db, 'equipos');
      const categoriaFilter = where('id', '==',parseInt (itemId));
      const equiposQuery = query(equiposCollection, categoriaFilter);
      try {
        const equiposSnapshot = await getDocs(equiposQuery);
        if (!equiposSnapshot.empty) {
          const primerEquipo = equiposSnapshot.docs[0].data();
          setItem(primerEquipo);
        } else {
          console.log('No se encontro ningun equipo');
        }
      } catch (e) {
        console.error('Error al cargar datos Firestore:', e);
      }
    }
    cargarItem();
  }, [itemId, db]);
  const handleCantidadChange = (e) => {
    setCantidad(parseInt(e.target.value));
  };
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
                  <p>{item.descripcion || 'Descripción no disponible'}</p>
                  <div className="mb-3">
                    <label htmlFor="cantidad" className="form-label">Cantidad a comprar:</label>
                    <input
                      type="number"
                      className="form-control form-control-sm"
                      id="cantidad"
                      value={cantidad}
                      onChange={handleCantidadChange}
                    />
                  </div>
                  <button className="btn btn-success btn-sm" onClick={agregarAlCarrito}>Add</button>
                </div>
              </div>
            </div>
            <div className="row justify-content-center mt-4">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5>Carrito de Compras</h5>
                {carrito.map((itemAgregado, index) => (
                  <div key={index}>
                    <p>
                      Nombre: {itemAgregado.nombre}, Cantidad: {itemAgregado.cantidad}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </div>


          </div>
        </div>
      ) : (
        <p>Cargando Datos</p>
      )}
     
    </div> 
  );
  
}

export default DetalleItemContainer;