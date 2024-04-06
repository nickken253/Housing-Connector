import { Route, Routes } from "react-router-dom";
import { RealEstateList } from '../RealEstateList/RealEstateList';

export const RealEstateListRoutes = () => {
  return (
    <Routes>
      <Route path="/invest" element={<RealEstateList />} />
    </Routes>
  );
};