import { Route, Routes } from "react-router-dom";
import { RealEstateList } from '../RealEstateList/RealEstateList';
import { RealEstateDetail } from "../RealEstateDetail/RealEstateDetail";

export const RealEstateListRoutes = () => {
  return (
    <Routes>
      <Route path="/invest" element={<RealEstateList />} />
      <Route path="/detail/:id" element={<RealEstateDetail />} />
    </Routes>
  );
};