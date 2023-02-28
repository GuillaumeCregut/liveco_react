import React, { useState, useRef } from 'react';
import { activitiesArray } from '../../activities';
import AddActivity from '../../components/addactivity/AddActivity';
import Activity from '../../components/activity/Activity';
import './Home.css';
import { useUser } from '../../contexts/UserContext';
const Home = (props) => {
  //Comme je veux que mes activitées soient dynamiques
  //J'initialise un state avec mon tableau de départ
  const [activities, setActivities] = useState(activitiesArray);
  const nameRef = useRef();
  const firstnameRef = useRef();
  const { setUser } = useUser();
  const handleClick = () => {
    const name = nameRef.current.value; //const name=document.getElementByID('name').value
    const firstname = firstnameRef.current.value;
    setUser({ firstname, name });
  };

  return (
    <section>
      <h2 className='home-section-title'>Les activités</h2>
      {/* Je veux afficher les données de mon tableau dans une carte Activity */}
      <div className='activity-container'>
        {activities.map((item, index) => (
          <Activity
            // POur pouvoir manipuler mon state, je transmet ces informations à mon composant
            key={index}
            activity={item}
          />
        ))}
      </div>
      <label htmlFor='name'> Nom : </label>
      <input type='text' id='name' ref={nameRef} />
      <label htmlFor='firstname'> Prénom : </label>
      <input type='text' id='firstname' ref={firstnameRef} />
      <button onClick={handleClick}>Valider</button>
      <AddActivity activity={activities} addActivity={setActivities} />
    </section>
  );
};

export default Home;
