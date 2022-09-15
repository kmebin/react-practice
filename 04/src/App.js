import { useEffect, useState } from "react";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const storedLoginData = localStorage.getItem("isLogin");

    if (storedLoginData === "1") {
      setIsLogin(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem("isLogin", "1");
    setIsLogin(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLogin");
    setIsLogin(false);
  };

  return (
    <>
      <MainHeader isAuthenticated={isLogin} onLogout={logoutHandler} />
      <main>
        {!isLogin && <Login onLogin={loginHandler} />}
        {isLogin && <Home onLogout={logoutHandler} />}
      </main>
    </>
  );
}

export default App;
