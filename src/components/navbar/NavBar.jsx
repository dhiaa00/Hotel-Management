import React, { useRef, useState } from "react";
import logo from "/images/logo.png";
import NavBarLink from "./NavBarLink";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NavBar = () => {
  const [linkNumber, setLinkNumber] = useState(1);
  const [toggle, setToggle] = useState(false);
  const listIcon = useRef();
  const navStyles = toggle
    ? { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }
    : { clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" };

  const navList = [
    {
      id: 1,
      title: "Dashboard",
      image: "bi-columns-gap",
    },
    {
      id: 2,
      title: "Booking",
      image: "bi-journal-bookmark",
    },
    {
      id: 3,
      title: "Rooms",
      image: "bi-archive",
    },
    {
      id: 4,
      title: "Clients",
      image: "bi-person",
    },
    {
      id: 5,
      title: "Help Center",
      image: "bi-question-circle",
    },
  ];
  const navigationList = {
    dashboard: 1,

    booking: 2,

    rooms: 3,

    clients: 4,

    "help%20center": 5,
  };

  const currentPage = useLocation().pathname.split("/")[1];
  const navigate = useNavigate();

  useEffect(() => {
    if (currentPage !== "") {
      setLinkNumber(navigationList[currentPage]);
    } else {
      navigate("/dashboard");
    }
  }, [currentPage]);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  const location = useLocation();
  useEffect(() => {
    setToggle(false);
  }, [location]);

  return (
    <div className="navbar text-white bg-[#222032] flex flex-col w-[20%] py-10 h-screen border-r-black border-solid fixed max-[920px]:flex-row max-[920px]:top-0 max-[920px]:left-0 max-[920px]:w-[100%] max-[920px]:h-fit max-[920px]:sticky max-[920px]:p-0 max-[920px]:items-center max-[920px]:justify-center max-[920px]:z-[10000] max-[720px]:p-[10px] max-[720px]:justify-between">
      <div className="logo flex justify-center items-center gap-2 mb-10 max-[920px]:m-0 max-[920px]:mr-5 ">
        <img src={logo} alt="logo" className=" w-10" />
      </div>
      <nav className="nav-links" style={navStyles}>
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
      {toggle ? (
        <i
          className="navBtn bi bi-x cursor-pointer z-[9999999]"
          ref={listIcon}
          onClick={handleToggle}></i>
      ) : (
        <i
          className="navBtn bi bi-list cursor-pointer z-[9999999]"
          ref={listIcon}
          onClick={handleToggle}></i>
      )}
    </div>
  );
};

export default NavBar;
