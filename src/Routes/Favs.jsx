
import React, { useContext } from "react";
import Card from "../Components/Card";
import ThemeContext from "../context/ThemeContext";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { theme } = useContext(ThemeContext);
  const obtenerFavoritosDesdeLocalStorage = () => {
    const favoritos = localStorage.getItem("favoritos");
    return favoritos ? JSON.parse(favoritos) : [];
  };

  // Obtiene los favoritos desde el almacenamiento local
  const favoritos = obtenerFavoritosDesdeLocalStorage();

  return (
    <div className={`favs-container ${theme === "dark" ? "dark-theme" : "light-theme"}`}>
      <h1>Favoritos de Dentistas</h1>
      <div className="card-grid">
        {favoritos.map((dentistaFavorito, index) => (
          <Card key={index} dentista={dentistaFavorito} />
        ))}
      </div>
    </div>
    //<>
      //<h1>Dentists Favs</h1>
      //<div className="card-grid">
        //{/* este componente debe consumir los destacados del localStorage */}
        //{/* Deberan renderizar una Card por cada uno de ellos */}
      //</div>
    //</>
    
  );
};

export default Favs;
