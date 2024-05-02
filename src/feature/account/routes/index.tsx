import { Route, Routes } from "react-router-dom";
import { AccountSettings } from '../components/AccountSettings/AccountSettings'
import { ProfileRoutes } from "./ProfileRoutes";

export const AccountRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AccountSettings />} />
      <Route path="/profile" element={<ProfileRoutes />} />
    </Routes>
  );
};