import React from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/useAuth";
interface Props {}

const NavBar = (props: Props) => {
  const { isLoggedIn, user, logout } = useAuth();
  return (
    <nav className="relative container mx-auto p-6 h-100">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <Link to={"/"}>
            <img src={logo} alt="" className="h-10 w-auto" />
          </Link>
          <div className="hidden font-bold lg:flex"></div>
        </div>
        <div className="hidden lg:flex items-center space-x-6 text-back">
          {isLoggedIn() ? (
            <Link
              className="font-bold text-black hover:text-darkBlue mr-10"
              to={"search"}
            >
              Search
            </Link>
          ) : null}
          {isLoggedIn() ? (
            <p className="text-darkBlue">{user?.userName}</p>
          ) : null}
          {isLoggedIn() ? (
            <a
              className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
              onClick={logout}
              href="/login"
            >
              LogOut
            </a>
          ) : (
            <div className="hidden lg:flex items-center space-x-6 text-back">
              <Link to="/login" className="hover:text-darkBlue">
                Login
              </Link>
              <Link
                to="/register"
                className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
              >
                Signup
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
