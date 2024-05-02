import { Route, Routes } from "react-router-dom";
import { Login } from "../components/Login/Login";
import { SignUp } from "../components/SignUp/SignUp";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};