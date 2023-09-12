import React, { useContext } from "react";
import {Link} from 'react-router-dom';
import {ContextGlobal} from "./utils/global.context";


const Card = ({ name, username, id }) => {
  const  {state, dispash} = useContext(ContextGlobal);
  const addFav = ()=>{
    const isDentistInFavs = state.favs.some ((dentist) => dentist.id == id);
    let updateFavs;
    if (isDentistInFavs){
      updateFavs = state.favs.filter ((dentist) => dentist.id !== id);
    } else {
      const dentistToAdd = state. data.find ((dentist)=> dentist.id == id)
      updateFavs = [...state.favs, dentistToAdd];
    }
    dispash ({ type: "addOsRemoveDentistFromFav", playload: updateFavs})
    localStorage.setItem("dentistFavorites", JSON.stringify(updateFavs));
  };
// Aqui iria la logica para agregar la Card en el localStorage
  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <Link to={`/dentist/${id}`}>
           <img src="/images/doctor.jpg" alt="doctors pic"/>
           <p>{name}</p>
           <p>{username}</p>
           <p>{id}</p>
        </Link>
        
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
