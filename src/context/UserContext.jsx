import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isAuth, setIsAuth] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);
  const [loading, setLoading] = useState(true);

  const server = "http://localhost:5500";

  async function loginUser(email, password, navigate) {
    setBtnLoading(true);
    try {
      const { data } = await axios.post(`${server}/api/user/login`, {
        email,
        password,
      });

      toast.success(data.message);
      localStorage.setItem("token", data.token);
      setUser(data.user);
      // console.log(data.user);
      
      setIsAuth(true);
      navigate("/"); // Redirect after successful login
    } catch (error) {
      setIsAuth(false);
      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      setBtnLoading(false);
    }
  }

  // Function to fetch user details
  async function fetchUser() {
    try {
      const { data } = await axios.get(`${server}/api/user/me`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });

      setIsAuth(true);
      setUser(data.user);
      setLoading(false);
    } catch (error) {
      console.error("Fetch user error:", error.response?.data || error.message);
      setIsAuth(false);
      setUser(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUser(); // Fetch user on component mount
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isAuth,
        setIsAuth,
        loginUser,
        btnLoading,
        loading,
      }}
    >
      {children}
      <Toaster />
    </UserContext.Provider>
  );
};

export const UserData = () => {
  return useContext(UserContext) || {};
};
