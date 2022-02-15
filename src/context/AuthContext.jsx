import { createContext, useCallback, useContext, useState } from "react";
import api from "../services/api";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem("@P2:token");
    const admin = localStorage.getItem("@P2:admin");

    // console.log(admin);

    if (token && admin) {
      return { token, admin: JSON.parse(admin) };
    }

    return {};
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post("/adminsAuth", {
      email,
      password,
    });

    const admin = response.data;

    localStorage.setItem("@P2:admin", JSON.stringify(admin));

    setData(admin);
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@P2:token");
    localStorage.removeItem("@P2:admin");

    setData({});
  }, []);

  return (
    <AuthContext.Provider value={{ admin: data.admin, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

export { AuthContextProvider, useAuth };
