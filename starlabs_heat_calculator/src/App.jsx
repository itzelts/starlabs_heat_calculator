import { BrowserRouter, Routes, Route } from "react-router-dom";
import Address from "./pages/Address";
import SelectPropertyType from "./pages/SelectPropertyType";
import Summary from "./pages/Summary";
import PropertySize from "./pages/PropertySize";
import MonthlyBill from "./pages/MonthlyBill";
import NotFound from "./pages/NotFound";
import Sidebar from "./components/Sidebar";
import FinancingOption from "./pages/FinancingOption";
import { PropertyProvider } from "./context/PropertyContext";
import { FinancingProvider } from "./context/FinanceContext";
import ThankYou from "./pages/ThankYou";

const App = () => {
  return (
    <PropertyProvider>
    <FinancingProvider>
        <BrowserRouter>
          <div className="bg-white sm:w-[60rem] h-[35rem] mt-[100px] sm:mt-0 rounded-xl shadow-xl p-4 flex flex-col sm:flex sm:flex-row justify-between">
            {/* <Route path="/" element={<Home />} /> Landing Page! Ask for what should be here */}
            <Sidebar />
            <Routes>
              <Route path="/" element={<Address />} />
              <Route path="/propertysize" element={<PropertySize />} />
              <Route path="/monthlybill" element={<MonthlyBill />} />
              <Route path="/selectpropertytype" element={<SelectPropertyType />} />
              <Route path="/financingoption" element={<FinancingOption />} />
              <Route path="/summary" element={<Summary />} />
              <Route path="/thankyou" element={<ThankYou />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
    </FinancingProvider>
    </PropertyProvider>
  );
};

export default App;
