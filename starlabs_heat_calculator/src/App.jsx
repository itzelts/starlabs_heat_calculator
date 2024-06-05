import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Address from "./pages/Address";
import SelectPropertyType from "./pages/SelectPropertyType";
import Summary from "./pages/Summary";
import Results from "./pages/Results";
import PropertySize from "./pages/PropertySize";
import MonthlyBill from "./pages/MonthlyBill";
import NotFound from "./pages/NotFound";
import Sidebar from "./components/Sidebar";
import FinancingOption from "./pages/FinancingOption";
import { PropertyProvider } from "./context/PropertyContext";
import { FinancingProvider } from "./context/FinanceContext";
import ThankYou from "./pages/ThankYou";
import ResultsLayout from "../src/layout.jsx";  // Import the ResultsLayout component

const MainLayout = ({ children }) => (
  <div className="bg-white sm:w-[60rem] h-[35rem] mt-[100px] sm:mt-0 rounded-xl shadow-xl p-4 flex flex-col sm:flex sm:flex-row justify-between">
    <Sidebar />
    <div>{children}</div>
  </div>
);

const App = () => {
  return (
    <PropertyProvider>
      <FinancingProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Address />} />
              <Route path="/propertysize" element={<PropertySize />} />
              <Route path="/monthlybill" element={<MonthlyBill />} />
              <Route path="/selectpropertytype" element={<SelectPropertyType />} />
              <Route path="/financingoption" element={<FinancingOption />} />
              <Route path="/summary" element={<Summary />} />
              <Route path="/thankyou" element={<ThankYou />} />
              <Route path="*" element={<NotFound />} />
            </Route>
            {/* Define the /results route outside of the MainLayout */}
            <Route path="/results" element={<Results />} />
          </Routes>
        </BrowserRouter>
      </FinancingProvider>
    </PropertyProvider>
  );
};


export default App;
