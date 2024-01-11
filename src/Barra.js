import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { BarraData } from './BarraData';
import './Barra.css';

function Barra() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
     <div className="barra">
      <Link to="#"className='menu-bars'>
        <FaIcons.FaBars onClick={showSidebar} />
        
      </Link> 
      <div>
        <p>TaskFusion </p>  
        </div>
    </div> 
    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
              
            </li>
            <div className='MenuItems'>
            {BarraData.map((item, index) => {
              return ( 
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
                );
              })
              }
            </div>        
      </ul>
    </nav>
    </>  
  )
}

export default Barra
