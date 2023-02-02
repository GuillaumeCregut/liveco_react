import React, { useState } from 'react';
import './AddActivity.css';

const AddActivity = ({ activity, addActivity }) => {
  //Pour pouvoir récupérer les données du formulaire, je vais
  //créer des states pour les manipuler
  const [img, setImg] = useState('');
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');

  const handleForm = (e) => {
    e.preventDefault();
    //Comme je ne peux pas changer directement la valeur d'un state,
    //je décompose mon tableau pour ajouter la nouvelle valeur
    //et j'utilise l'assesseur
    console.log('object');
    // activity.push(img,name,desc) JAMAIS
    addActivity([...activity, { img, name, desc }]);
    /*  
        a=[1,2,3];
        ...a =>1 2 3
        [...a]=>[1,2,3]
        [...a,4]=>[1,2,3,4]
        [5,...a]=>[5,1,2,3]
        */
  };

  return (
    <div className='add-activity'>
      <form className='activity-form' onSubmit={handleForm}>
        <label htmlFor='name'>
          Nom :
          <input
            type='text'
            className='input-activity-form'
            value={name}
            onChange={(e) => setName(e.target.value)}
            id='name'
          />
        </label>
        <label htmlFor='desc'>
          Description
          <input
            type='text'
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className='input-activity-form'
            id='desc'
          />
        </label>
        <label htmlFor='image'>
          Image
          <input
            type='text'
            value={img}
            className='input-activity-form'
            onChange={(e) => setImg(e.target.value)}
            id='image'
          />
        </label>
        <button className='activity-button'>Ajouter</button>
      </form>
    </div>
  );
};

export default AddActivity;
