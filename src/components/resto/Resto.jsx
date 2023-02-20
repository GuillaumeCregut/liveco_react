import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Resto.css';

const Resto = ({ resto }) => {
  console.log(resto);
  const [quantity, setQuantity] = useState(0);
  const [like, setLike] = useState(false);

  useEffect(() => {
  }, [quantity]);

  let totalPrice = parseInt(quantity) * parseInt(resto.price);
  console.log(typeof setQuantity);
  return (
    <article className='restaurant'>
      {/* lien : /resto/1 Je veux passer le like et la quantité*/} 
      <Link to={`/resto/${resto.id}`} state={{ like:like,quantity:quantity}}> 
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
        className={like ? 'like like-container' : 'dislike like-container'}
        onClick={() => setLike(!like)}
      ></div>
    </article>
  );
};

export default Resto;
