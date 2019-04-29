import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCookieBite } from 'react-icons/fa';

const Header = props => {

  return (
    <div >
      <header className="navbar navbar-light bg-light">
        <h1 className="navbar-brand mb-0 h1"><FaCookieBite /> {props.title}</h1>
      </header>
    </div>

  )
}

export default Header