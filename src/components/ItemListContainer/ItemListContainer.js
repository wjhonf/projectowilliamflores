import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getFirestore, collection, query, getDocs, where } from 'firebase/firestore';

function ItemListContainer() {
  const { categoryId } = useParams();
  const [equiposFiltrados, setEquiposFiltrados] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore();
        const equiposCollection = collection(db, 'equipos');
        let equiposQuery = equiposCollection;

        if (categoryId) {
          const categoriaFilter = where('CatEquipo', '==', parseInt(categoryId));
          equiposQuery = query(equiposCollection, categoriaFilter);
        }

        const equiposSnapshot = await getDocs(equiposQuery);
        const filteredEquipos = equiposSnapshot.docs.map((doc) => doc.data());
        setEquiposFiltrados(filteredEquipos);
      } catch (e) {
        console.log('Error al cargar los equipos:', e);
      }
    };

    fetchData();
  }, [categoryId]);

  return (
    <div>
      <div className="container">
        <h3>Lista de Equipos</h3>
        <div className="row">
          {equiposFiltrados.map((equipo) => (
            <div key={equipo.id} className="col-md-4 mb-3">
              <div className="card">
                <img
                  src={equipo.imagenEquipo}
                  className="card-img-top"
                  alt={equipo.nombre}
                  style={{ maxWidth: '20%', maxHeight: '20%' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{equipo.nombre}</h5>
                  <Link to={`/item/${equipo.id}`} className="btn btn-success btn-sm">
                    Ver Caracteristicas
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ItemListContainer;
