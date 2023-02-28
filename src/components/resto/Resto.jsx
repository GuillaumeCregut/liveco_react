import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';
import './Resto.css';

const Resto = ({ resto }) => {
  console.log(resto);
  const [quantity, setQuantity] = useState(0);
  const [like, setLike] = useState(false);
  const { user, setUser } = useUser();
  //Créer une variable pour stocker le like user et l'afficher
  let liked = false;
  //JE vais chercher dans l'utilisateur les information du restaurant
  const userResto = user?.resto?.find((item) => {
    return item?.id === resto.id;
  });
  if (userResto) {
    liked = userResto.like;
  }
  const handleClick = (e) => {
    const id = resto.id;
    //On créé un tableau de restaurants
    let newRestoArray = [];
    //Si l'utilisateur n'a pas encore cliqué sur un restaurant
    if (!user?.resto) {
      //JE créé le restaurant
      const newResto = {
        id,
        like: !like,
        qtty: 0,
      };
      //Je l'ajoute dans le tableau
      newRestoArray.push(newResto);
    }
    //Si l'utilisateur a déjà cliqué sur un restaurant
    else {
      //A t'on l'élement dans le tableau
      const oldId = user.resto.findIndex((item) => item.id === id);
      //Si l'id est  dans le tableau
      if (oldId !== -1) {
        newRestoArray = user.resto.map((item) => {
          //Si l'id est bien celui du restaurant
          if (item.id === id) return { ...item, like: !like };
          //Si ce n'est pas le resto concerné
          return item;
        });
      } //l'id n'est pas dans le tableau
      //Mon nouveau tableau reprend l'ancien tableau et y ajoute le nouveau restaurant
      else newRestoArray = [...user.resto, { id, like: !like, qtty: 0 }];
    }
    setUser({ ...user, resto: newRestoArray });
    setLike(!like);
  };

  let totalPrice = parseInt(quantity) * parseInt(resto.price);
  console.log(typeof setQuantity);
  return (
    <article className='restaurant'>
      {/* lien : /resto/1 Je veux passer le like et la quantité*/}
      <Link
        to={`/resto/${resto.id}`}
        state={{ like: like, quantity: quantity }}
      >
        <img src={resto.picture} alt={resto.name} className='img-food' />
      </Link>
      <h3 className='title-restaurant'>{resto.name}</h3>
      <p>Prix : {resto.price} euros</p>
      <label htmlFor='qtty'>
        Quantité :
        <select
          id='qtty'
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        >
          <option value='0'>0</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </select>
      </label>
      <p>Prix total : {totalPrice} euros</p>
      <div
        className={liked ? 'like like-container' : 'dislike like-container'}
        onClick={handleClick}
      ></div>
    </article>
  );
};

export default Resto;
/*
user{
  resto[
    {
      id
      like = >true/false
      qtty
    }
  ]

{...item}=>{id,like,qtty}
=>item :{id:2,like:false,qtty:3}
=>{...item}=>{id:2,like:false,qtty:3}
=>{...item,like:!like}=>{id:2,like:true,qtty:3}
}

*/
