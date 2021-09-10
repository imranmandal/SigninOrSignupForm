import React from "react";
import { Link } from "react-router-dom";

const Header = ({ subTitle, linkText, link }) => {
  return (
    <>
      <div className="md:flex md:items-end">
        <img
          className="h-14 mb-5 md:mr-4 md:mb-0"
          src="/Images/logo.png"
          alt="Acme Corp."
        />
        <div>
          <h1 className="text-4xl font-bold">Acme Corp.</h1>
        </div>
      </div>
      <p className="font-medium leading-10">
        {subTitle}{" "}
        <span className="text-primary cursor-pointer">
          <Link to={link}>{linkText}</Link>
        </span>
      </p>
    </>
  );
};

export default Header;
