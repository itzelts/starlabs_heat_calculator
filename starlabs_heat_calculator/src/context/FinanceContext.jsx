import { createContext, useState } from "react";

const FinancingContext = createContext();

export const FinancingProvider = ({ children }) => {
  const [financingOption, setFinancingOption] = useState([
    {
      id: 1,
      value: "With Loan",
      desc: "Pay off with",
    },
    {
      id: 2,
      value: "Without Loan",
      desc: "Not financed with external loans",
    },
  ]);

  const [selectedFinancingOptionValue, setSelectedFinancingOptionValue] = useState([]);

  return (
    <FinancingContext.Provider
      value={{
        financingOption,
        setFinancingOption,
        selectedFinancingOptionValue,
        setSelectedFinancingOptionValue
      }}
    >
      {children}
    </FinancingContext.Provider>
  );
};

export default FinancingContext;
