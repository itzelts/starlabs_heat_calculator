import { createContext, useState } from "react";
import home from "../assets/icons8-home.svg"

const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {
  const [propertyType, setPropertyType] = useState([
    { id: 1, 
      img: home, 
      title: "Type", 
    },
    {
      id: 2,
      img: home,
      title: "Type",
    },
    {
      id: 3,
      img: home,
      title: "Type",
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
