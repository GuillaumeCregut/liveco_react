import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav>
      <div className="logo-container">
       <Link to='/'> <img 
        src="https://e7.pngegg.com/pngimages/936/432/png-clipart-budapest-zoo-and-botanical-garden-magyar-allatkertek-szovetsege-crane-kft-global-feast-text-logo.png"
         alt="Superland"
         className='nav-logo'
         /></Link>
      </div>
      <div className="navlink-container">
        <input type="checkbox" className='toggle-btn' />
        <div className="burger-menu"></div>
        <ul className="menu">
          <li><NavLink 
          to='/'
          className={({isActive})=>(isActive?'active-menu': '')}
          > Accueil</NavLink></li>
          <li><NavLink to='animals'
          className={({isActive})=>(isActive?'active-menu': '')}>Animaux</NavLink></li>
          <li><NavLink to='resto'
          className={({isActive})=>(isActive?'active-menu': '')}>Restaurants</NavLink></li>
          <li><NavLink to='contact'
          className={({isActive})=>(isActive?'active-menu': '')}>Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
