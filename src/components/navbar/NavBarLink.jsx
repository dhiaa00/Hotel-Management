import React from "react";
import { Link } from "react-router-dom";

const NavBarLink = ({ linkNumber, setLinkNumber, title, icon, i }) => {
  const style = i == linkNumber ? " cursor-pointer active" : "cursor-pointer";
  return (
    <Link to={`/${title.toLowerCase()}`} className={style}>
      <div
        id={i}
        className="linkElement flex items-center gap-5 p-2 w-full "
        onClick={(e) => {
          setLinkNumber(e.target.id);
        }}>
        <i className={`bi ${icon} text-2xl`}></i>
        {title}
      </div>
    </Link>
  );
};

export default NavBarLink;
