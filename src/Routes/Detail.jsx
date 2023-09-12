import React, { useContext, useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import ThemeContext from './ThemeContext'; // Asume que tienes un contexto llamado ThemeContext para gestionar el tema



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { id } = useParams(); // Obtener el parámetro dinámico de la URL
  const [dentist, setDentist] = useState(null);
  const { theme } = useContext(ThemeContext); // Obtener el tema actual del contexto
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  useEffect(() => {
    // Hacer una solicitud de fetch para obtener la información del dentista con el ID proporcionado
    // Supongamos que tienes una función fetchData que hace la solicitud
    fetch(id)
      .then((data) => setDentist(data))
      .catch((error) => console.error('Error:', error));
  }, [id]);

  return (
    //<>
      //<h1>Detail Dentist id </h1>
      //{/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      //{/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    //</>
    <div className={`detail-container ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
    {dentist ? (
      <>
        <h1>Detalle del Dentista</h1>
        <div>
          <p>Nombre: {dentist.name}</p>
          <p>Email: {dentist.email}</p>
          <p>Teléfono: {dentist.phone}</p>
          <p>Website: {dentist.website}</p>
        </div>
      </>
    ) : (
      <p>Cargando información del dentista...</p>
    )}
  </div>
  )
}

export default Detail