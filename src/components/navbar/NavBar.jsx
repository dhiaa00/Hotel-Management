import React, { useState } from "react";
import logo from "/images/logo.png";
import NavBarLink from "./NavBarLink";

const NavBar = () => {
  const [linkNumber, setLinkNumber] = useState(1);
  const navList = [
    {
      id: 1,
      title: "Dashboard",
      image: "bi-columns-gap",
    },
    {
      id: 2,
      title: "Activity",
      image: "bi-clock-history",
    },
    {
      id: 3,
      title: "Analytics",
      image: "bi-bar-chart-fill",
    },
    {
      id: 4,
      title: "Transaction",
      image: "bi-arrow-left-right",
    },
    {
      id: 5,
      title: "Help Center",
      image: "bi-question-circle",
    },
  ];

  return (
    <div className=" text-white bg-[#222032] navbar flex flex-col w-[20%] py-10 h-screen border-r-black border-solid sticky">
      <div className="logo flex justify-center items-center gap-2 mb-10 ">
        <img src={logo} alt="" className=" w-10" />
      </div>
      <nav className="nav-links">
        <ul className="flex flex-col mx-5 gap-3">
          {navList.map((e) => (
            <NavBarLink
              linkNumber={linkNumber}
              setLinkNumber={setLinkNumber}
              title={e.title}
              icon={e.image}
              key={e.id}
              i={e.id}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
