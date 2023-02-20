import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom"


const RestaurantDetails = () => {
  const [details, setDetails]=useState(null);
  // Récupère l'ID depuis l'URL
  const {id}=useParams();
  //On récupère les states passé en accompagnement
  const {state}=useLocation();
  const {like,quantity}=state;
  console.log(useLocation())
  //On va chercher dans l'API l'Id donné
 useEffect(()=>{
  axios
    .get(`http://localhost:8000/api/resto/${id}`)
    .then((resp)=>setDetails(resp.data))
    .catch((err)=>console.log(err))
 },[]);
  return (
    details?
    <div>
      {like ? <p>Vous avez aimé le restaurant</p>:<p>Vous ne connaissez pas le restaurant</p>}
      Restaurant id : {id}
      <p>Nom du restaurant : {details.name}</p>
      <p>Prix : {details.price}</p>
      <p>Vous avez commandé : {quantity} plat{quantity>1?'s':''}</p>
      <img src={details.picture} alt={details.name} style={{width:'200px'}} />
      <p><Link to='/resto'>Retour</Link></p>
    </div>
     : <p> Attendre </p>
  )
}

export default RestaurantDetails
