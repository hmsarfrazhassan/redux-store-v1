import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeLink = ({ isActive }) =>
    isActive ? "text-sky-500" : "text-black";
  return (
    <div className="h-25 w-full px-20 font-semibold bg-slate-300 flex justify-start items-center gap-16">
      <NavLink to={"/"} className={activeLink}>
        Counter
      </NavLink>
      <NavLink to={"/user"} className={activeLink}>
        User
      </NavLink>
    </div>
  );
};

export default Navbar;
