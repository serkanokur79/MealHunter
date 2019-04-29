import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCopyright } from 'react-icons/fa';
import { FaDatabase } from 'react-icons/fa';
const Footer = props => {

  return (
    <div >
      <footer className="navbar navbar-light bg-light">
        <p className="navbar-brand mb-2 h1">
          <FaCopyright />
          Serkan Okur</p>
        <p> <FaDatabase />powered by:
        <a href="https://www.themealdb.com" className="btn btn-outline-primary m-1" target="_blank" >TheMealDB API</a>
        </p>
      </footer>
    </div>

  )
}

export default Footer;