import { createContext, useState } from "react";
import solar from "../assets/icons8-solar-50.png"
import battery from "../assets/icons8-battery-48.png"

const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {
  const [propertyType, setPropertyType] = useState([
    { id: 1, 
      img: solar, 
      title: "Solar Panel", 
    },
    {
      id: 2,
      img: battery,
      title: "Battery",
    },
    {
      id: 3,
      img: solar,
      title: "Solar and Battery",
    },
  ]);


  const [selectedPropertyType, setSelectedPropertyType] = useState({
    title: "",
  });



  return (
    <PropertyContext.Provider
      value={{
        propertyType,
        setPropertyType,
        selectedPropertyType,
        setSelectedPropertyType,
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
};

export default PropertyContext;
