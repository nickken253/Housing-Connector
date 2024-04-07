import { Route, Routes } from "react-router-dom";
import { RealEstateList } from '../RealEstateList/RealEstateList';
import { RealEstateDetail } from "../RealEstateDetail/RealEstateDetail";
import { HistoryTransaction } from "../HistoryTransaction/HistoryTransaction";
import { InvestmentContractPage } from "../InvestmentContract/InvestmentContractPage";

export const RealEstateListRoutes = () => {
  return (
    <Routes>
      <Route path="/invest" element={<RealEstateList />} />
      <Route path="/detail/:id" element={<RealEstateDetail />} />
      <Route path="/history" element={<HistoryTransaction />} />
      <Route path="/investment-contract" element={<InvestmentContractPage />} />
    </Routes>
  );
};