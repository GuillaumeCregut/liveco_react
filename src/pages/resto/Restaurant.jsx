import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../../components/loading/Loading';
import Resto from '../../components/resto/Resto';
import './Restaurant.css';

const Restaurant = (props) => {
  const [restaurant, setRestaurant] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const url = 'http://localhost:8000/api/resto';
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setRestaurant(response.data);
        setIsLoaded(true);
      })
      .catch((err) => {
        console.log(err);
        alert('défaut serveur');
      });
  }, []);

  return (
    <section>
      <h2 className='resto-section-title'>Nos plats</h2>
      {isLoaded ? null : <Loading />}
      <div className='container-food'>
        {restaurant.map((item, i) => (
          <Resto key={i} resto={item} />
        ))}
      </div>
    </section>
  );
};

export default Restaurant;
