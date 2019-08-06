import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHamburger } from "react-icons/fa";

const Header = props => {
  return (
    <div>
      <header className="navbar navbar-light bg-light">
        <h1 className="navbar-brand h1">
          <FaHamburger /> {props.title}
        </h1>
      </header>
    </div>
  );
};

export default Header;
