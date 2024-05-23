import { BrowserRouter, Routes, Route } from "react-router-dom";
import Address from "./pages/Address";
import SelectPropertyType from "./pages/SelectPropertyType";
import Summary from "./pages/Summary";
import NotFound from "./pages/NotFound";
import Sidebar from "./components/Sidebar";
import { PropertyProvider } from "./context/PropertyContext";
import ThankYou from "./pages/ThankYou";

const App = () => {
  return (
    <PropertyProvider>
        <BrowserRouter>
          <div className="bg-white sm:w-[60rem] h-[35rem] mt-[100px] sm:mt-0 rounded-xl shadow-xl p-4 flex flex-col sm:flex sm:flex-row justify-between">
            <Sidebar />
            <Routes>
              <Route path="/" element={<Address />} />
              <Route path="/selectpropertytype" element={<SelectPropertyType />} />
              <Route path="/summary" element={<Summary />} />
              <Route path="/thankyou" element={<ThankYou />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
    </PropertyProvider>
  );
};

export default App;
