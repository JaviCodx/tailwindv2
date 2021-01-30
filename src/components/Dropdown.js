import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "grid grid-row-4 text-center items-center bg-yellow-500"
          : "hidden"
      }
    >
      <Link className="p-4 hover:text-red-500" to="/">
        Home
      </Link>
      <Link className="p-4 hover:text-red-500" to="/menu">
        Menu
      </Link>
      <Link className="p-4 hover:text-red-500" to="/about">
        About
      </Link>
      <Link className="p-4 hover:text-red-500" to="/contact">
        Contact
      </Link>
    </div>
  );
};

export default Dropdown;
