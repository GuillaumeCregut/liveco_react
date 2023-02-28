import { useRef } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';

const Contact = () => {
  const userConnected = true;
  const nameRef = useRef();
  const firstnameRef = useRef();
  const { setUser } = useUser(); //Récupère depuis le context l'assesseur

  const handleClick = () => {
    const name = nameRef.current.value; //const name=document.getElementByID('name').value
    const firstname = firstnameRef.current.value;
    setUser({ firstname, name });
  };
  return (
    <div style={{ border: '1px solid black', padding: '10px' }}>
      Contact
      <ul>
        <li>
          <Link to='/contact'>Page 1</Link>
        </li>
        <li>
          <Link to='/contact/page2'>Page 2</Link>
        </li>
        <li>
          <Link to='page3'>Page 3</Link>
        </li>
      </ul>
      <div style={{ border: '1px solid red', padding: '10px' }}>
        {/* Si utilisateur connecté ?=>J'affiche le outlet */}
        {userConnected ? (
          <Outlet />
        ) : (
          /* //Sinon, j'affiche un message de connexion */
          <p>Veuillez vous connecter</p>
        )}
      </div>
      <label htmlFor='name'> Nom : </label>
      <input type='text' id='name' ref={nameRef} />
      <label htmlFor='firstname'> Prénom : </label>
      <input type='text' id='firstname' ref={firstnameRef} />
      <button onClick={handleClick}>Valider</button>
    </div>
  );
};

export default Contact;
