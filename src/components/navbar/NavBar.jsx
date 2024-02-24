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
      title: "Booking",
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
    <div className="navbar text-white bg-[#222032] flex flex-col w-[20%] py-10 h-screen border-r-black border-solid fixed max-[920px]:flex-row max-[920px]:top-0 max-[920px]:left-0 max-[920px]:w-[100%] max-[920px]:h-fit max-[920px]:sticky max-[920px]:p-0 max-[920px]:items-center max-[920px]:justify-center max-[920px]:z-[10000]">
      <div className="logo flex justify-center items-center gap-2 mb-10 max-[920px]:m-0 max-[920px]:mr-5 ">
        <img src={logo} alt="" className=" w-10" />
      </div>
      <nav className="nav-links">
        <ul className="flex flex-col max-[920px]:flex-row mx-5 gap-3 max-[920px]:m-0 max-[920px]:p-2">
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
