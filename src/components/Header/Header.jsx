import React from "react";
import Logo from "../Logo";
import { NavLink } from "react-router-dom";

function Header() {
  const handleSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.add("md:flex");
  };

  const handleCross = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.remove("md:flex");
  };

  return (
    <div className="bg-headerbg w-full flex p-4 md:px-8 justify-around md:justify-between">
      <div className="py-4">
        <Logo />
      </div>
      <div className="flex md:hidden ">
        <NavLink
          to="/"
          className={({ isActive }) => {
            return (
              "transition-all delay-75 font-poppins text-lg mx-5 hover:text-black hover:bg-white rounded-lg px-2 py-1" +
              (isActive ? " bg-white text-black" : " text-white")
            );
          }}
        >
          Home
        </NavLink>
        <NavLink
          className="transition-all delay-75 font-poppins text-lg text-white mx-5 hover:text-black hover:bg-white rounded-lg px-2 py-1"
          onClick={() => {
            window.scrollTo({
              top: 600,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          Projects
        </NavLink>
        <NavLink
          className="transition-all delay-75 font-poppins text-lg text-white mx-5 hover:text-black hover:bg-white rounded-lg px-2 py-1"
          onClick={() => {
            window.scrollTo({
              top: 1218,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          Experience
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return (
              "transition-all delay-75 font-poppins text-lg mx-5 hover:text-black hover:bg-white rounded-lg px-2 py-1" +
              (isActive ? " bg-white text-black" : " text-white")
            );
          }}
          to="/about"
        >
          About
        </NavLink>
      </div>
      <button className="hidden md:block invert" onClick={handleSidebar}>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAGZJREFUSEvtlrENACAMw8pnnMZpfAYTC1W3CDOEA2JhUpUW0GkQNwx+Zt6qj+ohdp7yKtVLDE6c78DiC+c4t/o46WLX8877rlzYOGGqxU/scYryB4KVCwNja9GtlhvwWpQrrQIx1Rt3TwofeC3yFwAAAABJRU5ErkJggg==" />
      </button>
      <div className="flex-col hidden absolute right-0 top-0 bg-headerbg w-full h-full pt-6 gap-6 items-start sidebar z-50 ">
        <div className="invert mx-5" onClick={handleCross}>
          <img
            className="w-10"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAUdJREFUSEvt1bsuRUEUxvGfS6XTewaJNxAhhAiFQkiUWgoPpEAhIiI6jZBoCF7FJS7R2EvmJHISZvbZyTmKM93OXrP+832z1poBPVoDPeLqg7vmfN/qf2X1KE6whYfMyWawXcUt4/Ov2NwdD+Ie43jEFO5+SbhYxR1jGGeI719XDhwbN7DLd88/YRo3bRkXkisB/UjQ86bgdvhLUt6Ct0PncJErlhLFrRyrOEjKW/AxHCZ73zBfAo2EdcARv4b9dJKAjyDq4B2zlROXOaWt/3XBsS+U72EoJQmlce/XpdBOFPcMvJ7UxgF+Wv2KKKqrUtV1rM4VV7RRUUXXsfpnL3etnToZIFnlOaujVW4xgeeqRycLR+ZpNWqXmk6ueCSOqmLaSXP7r3wxxTax0vSRKC3S2nE5q2snLN3QB5c61Tiub3VjC0sTfAHboEIfytnLXAAAAABJRU5ErkJggg=="
          />
        </div>
        <NavLink
          to="/"
          className="transition-all delay-75 font-poppins text-3xl mx-5 text-white rounded-lg px-2 py-1"
          onClick={handleCross}
        >
          Home
        </NavLink>
        <NavLink
          className="transition-all delay-75 font-poppins text-3xl text-white mx-5  rounded-lg px-2 py-1"
          to="/projects"
          onClick={handleCross}
        >
          Projects
        </NavLink>
        <NavLink
          className="transition-all delay-75 font-poppins text-3xl mx-5 text-white rounded-lg px-2 py-1"
          to="/about"
          onClick={handleCross}
        >
          About
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
