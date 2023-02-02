import React, { useState } from 'react';
import { activitiesArray } from '../../activities';
import AddActivity from '../../components/addactivity/AddActivity';
import Activity from '../../components/activity/Activity';
import './Home.css';
const Home = (props) => {
  //Comme je veux que mes activitées soient dynamiques
  //J'initialise un state avec mon tableau de départ
  const [activities, setActivities] = useState(activitiesArray);
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
      <AddActivity activity={activities} addActivity={setActivities} />
    </section>
  );
};

export default Home;
