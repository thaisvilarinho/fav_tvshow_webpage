import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';

import './styles.css';

const Navbar = () => {

  const [clicked, setClicked] = useState(false);


  return (
    <nav className='navbar-items'>
      <h1 className='navbar-logo'>TVMAZEAPI<i className='fas fa-tv'></i></h1>
      <div className="menu-icon" onClick={() => setClicked(!clicked)}> 
          <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
        {
          MenuItems.map((item, index)=>{
            return (
              <li key={index}>
                <Link to={item.url} className={item.cName}>
                  {item.title}
                </Link>
              </li>
            )
          })
        }
      </ul>
    </nav>
  );
}

export default Navbar;
