import React from 'react'
import './Activity.css';
const Activity = (props) => {
    return (
        <article className="activity-column">
            <img
            src={props.activity.img}
            alt={props.activity.name}
            className='activity-img'/>
            <h3 className="activity-title">{props.activity.name}</h3>
            <p className="activity-content">{props.activity.desc}</p>

        </article>
    )
}

export default Activity