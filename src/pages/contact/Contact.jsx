import { Link, Outlet } from 'react-router-dom';

const Contact = () => {
  const userConnected = true;
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
    </div>
  );
};

export default Contact;
