import { createContext } from "vm";
import { UserProfile } from "../Models/User";
import { useNavigate } from "react-router";
import React, { useEffect, useState } from "react";
import { setSourceMapRange } from "typescript";
import { loginAPI, registerAPI } from "../Services/AuthService";
import { toast } from "react-toastify";
import axios from "axios";

type UserContextType = {
  user: UserProfile | null;
  token: string | null;
  registerUser: (email: string, password: string, userName : string) => void;
  loginUser: (username: string, password: string) => void;
  logout: () => void;
  isLoggedIn: () => boolean;
};

//userContext holds the data of UserProfile
const UserContext = React.createContext<UserContextType>({} as UserContextType);

type Props = { children: React.ReactNode };

// children holds all the pages that is being passed in from app.tsx
export const UserProvider = ({ children }: Props) => {
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    debugger;
    //initialized user and token for api calls
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    if (user && token && Object.keys(JSON.parse(user)).length !== 0) {
      setUser(JSON.parse(user));
      setToken(token);
      // attached token to the header of  every api call we make
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    }
    setIsReady(true);
  }, []);

  const registerUser = async (email: string, password: string, userName : string) => {
    await registerAPI(email, password, userName)
      //res is the response object returned by registerAPI
      .then((res) => {
        if (res) {
          localStorage.setItem("token", res?.data.token);
          const userObj = {
            userName: res?.data.userName,
            email: res?.data.email,
          };
          localStorage.setItem("user", JSON.stringify(userObj));
          setToken(res?.data.token!);
          setUser(userObj!);
          toast.success("Login Success!");
          navigate("/search");
        }
      })
      .catch((e) => toast.warning("Server error occured"));
  };

  const loginUser = async (email: string, password: string) => {
    await loginAPI(email, password)
      .then((res) => {
        if (res) {
          localStorage.setItem("token", res?.data.token);
          const userObj = {
            userName: res?.data.userName,
            email: res?.data.email,
          };
          localStorage.setItem("user", JSON.stringify(userObj));
          setToken(res?.data.token!);
          setUser(userObj!);
          toast.success("Login Success!");
          navigate("/search");
        }
      })
      .catch((e) => toast.warning("Server error occured"));
  };

  const isLoggedIn = () => {
    debugger;
    return !!user;
  };
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setToken("");
    navigate("/");
  };

  //UserContext holds the type defined in UserProfile
  return (
    //usercontext.provider "provides" the value to all the components
    <UserContext.Provider
      //this sets the values defined indside type UserProfile
      value={{ loginUser, user, token, logout, isLoggedIn, registerUser }}
    >
      {/* children are being passed in from app.tsx */}
      {/* passing value props from UserContext.Provider allows all the components inside the component tree
      to access the values */}
      {isReady ? children : null}
    </UserContext.Provider>
  );
};
//useAuth will allow to access the values anywhere
//useContext below is "destructuring" the data that UserContext initially was set with (ie UserContextType on top of this file)
export const useAuth = () => React.useContext(UserContext);
