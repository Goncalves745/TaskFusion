import React from 'react';
import './Barra.css';
import * as FaIcons from "react-icons/fa";
import {Link} from 'react-router-dom';

function Barra() {
  return (
    <div className="barra">
      <Link to="#"className='menu-bars'>
        <FaIcons.FaBars />
      </Link>     
    </div>
  )
}

export default Barra