import React, { useState } from 'react'
import {activitiesArray} from '../../activities';
import AddActivity from '../../components/addactivity/AddActivity';
import Activity from '../../components/activity/Activity';
import './Home.css';
const Home = (props) => {
    const [activities,setActivities]=useState(activitiesArray)
    return (
        <section>
            <h2 className="home-section-title">Les activités</h2>
            <div className="activity-container">
                {activities.map((item,index)=>(
                    <Activity
                       key={index} 
                       activity={item}
                    />
                ))}
            </div>
        <AddActivity 
            activity={activities}
            addActivity={setActivities}
        />
        </section>
    )
}

export default Home
