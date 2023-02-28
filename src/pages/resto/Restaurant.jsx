import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../../components/loading/Loading';
import Resto from '../../components/resto/Resto';
import './Restaurant.css';
import { useUser } from '../../contexts/UserContext';

const Restaurant = () => {
  const [restaurant, setRestaurant] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  //Récupère mon context
  const { user } = useUser();
  let name = user?.name;
  name = '';
  let firstname = '';
  if (!typeof user === 'undefined') {
    firstname = user.firstname;
  }
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
      <p>
        Bonjour {user?.firstname} - {user?.name}
      </p>
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
