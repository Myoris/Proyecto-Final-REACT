import React, { useContext } from 'react';
import ThemeContext from './ThemeContext'; // Asume que tienes un contexto llamado ThemeContext
import Card from '../Components/Card';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { theme } = useContext(ThemeContext); // Obtener el tema actual del contexto

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
      </div>
    </main>
  )
}

export default Home