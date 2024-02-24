import React from "react";
import { Link } from "react-router-dom";

const NavBarLink = ({ linkNumber, setLinkNumber, title, icon, i }) => {
  const style = i == linkNumber ? " cursor-pointer active" : "cursor-pointer";
  return (
    <Link to={`/${title.toLowerCase()}`} className={style}>
      <div
        id={i}
        className="linkElement flex items-center gap-5 py-3 px-4 w-full max-[920px]:p-2 max-[920px]:gap-2"
        onClick={(e) => {
          setLinkNumber(e.target.id);
        }}>
        <i
          className={`bi ${icon} text-2xl flex items-center justify-center`}></i>
        {title}
      </div>
    </Link>
  );
};

export default NavBarLink;
