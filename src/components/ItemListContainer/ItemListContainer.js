import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function ItemListContainer() {
  const { categoryId } = useParams();
  const [equipos, setEquipos] = useState([]);
  const [equiposFiltrados, setEquiposFiltrados] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/equipos.json");
        const data = await response.json();
        setEquipos(data);
      } catch (e) {
        console.log('Error al cargar los equipos:', e);
      }
    };
    fetchData();
  }, [categoryId]);
  const filtrarEquiposPorCategoria = (categoryId) => {
    if (categoryId) {
      const filtrados = equipos.filter((equipo) => equipo.CatEquipo === parseInt(categoryId));
      setEquiposFiltrados(filtrados);
    } else {
      setEquiposFiltrados(equipos);
    }
  };
  useEffect(() => {
    filtrarEquiposPorCategoria(categoryId);
  }, [categoryId, equipos]);
  return (
    <div>
      <div className="container">
        <h3>Lista de Equipos</h3>
        <div className="row">
          {equiposFiltrados.map((equipo) => (
            <div key={equipo.id} className="col-md-4 mb-3">
              <div className="card">
                <img src={equipo.imagenEquipo} className="card-img-top" alt={equipo.nombre} style={{ maxWidth: '20%', maxHeight: '20%' }}/>
                <div className="card-body">
                  <h5 className="card-title">{equipo.nombre}</h5>
                  <Link to={`/item/${equipo.id}`} className="btn btn-success btn-sm">Ver Caracteristicas</Link>
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
