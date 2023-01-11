import { useState, useEffect } from "react";

import AuthForm from "../components/Auth/AuthForm";
import ProfilePage from "./ProfilePage";

const AuthPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.setItem("isLoggedIn", "0");
    setIsLoggedIn(false);
  };

  return (
    <>
      {!isLoggedIn && <AuthForm onLogin={loginHandler} />}
      {isLoggedIn && <ProfilePage onLogout={logoutHandler} />}
    </>
  );
};

export default AuthPage;
