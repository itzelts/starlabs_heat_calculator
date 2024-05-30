import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import FinancingContext from "../context/FinanceContext";

const FinancingOption = () => {
  const navigate = useNavigate();
  const [num, setNum] = useState(0);
  
  const { financingOption } = useContext(FinancingContext);
  let { selectedFinancingOptionValue } = useContext(FinancingContext);


  const getFinancingDetails = (id) => {
    selectedFinancingOptionValue.value = financingOption[id].value;

    setNum(id + 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedFinancingOptionValue.value !== "") {
      navigate("/summary");
    } else {
      alert("Please choose a financing plan");
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   navigate("/summary");
  // };

  // const handleChange = (e, id) => {
  //   setSelectedFinancingOptionValue((prev) => [...prev, financingOption[id]]);
  //   console.log(selectedFinancingOptionValue);
  //   setNum(id + 1);
  // };

  return (
    <div className="sm:basis-[60%] w-[300px] sm:w-[100%] h-[100%] sm:pr-[80px]">
      <h1 className="mt-10 text-3xl font-[800] mb-2 text-primary-marineBlue">
        Select a financing plan 
      </h1>
      <p className="text-neutral-coolGray mb-6">
        Help understand costs to you and possible plans of action.
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col relative space-y-4"
      >
        {financingOption.map((item, idx) => {
          return (
            <div
              onClick={() => getFinancingDetails(idx)}
              key={item.id}
              className={`${
                num != idx + 1 ? "bg-white" : "bg-primary-lightBlue"
              } border-2 ${
                num != idx + 1
                  ? "border-neutral-lightGray"
                  : "border-primary-purplishBlue"
              } rounded-md flex items-center justify-between p-4 cursor-pointer transition-all duration-300 hover:border-primary-purplishBlue`}
            >
                <div>
                  <p className="font-[500] text-primary-marineBlue">
                    {item.value}
                  </p>
                  <p className="text-neutral-coolGray text-[14px]">
                    {item.desc}
                  </p>
                </div>
              </div>
          );
        })}
        <div className="flex justify-between items-center pt-[100px] sm:pt-[47px]">
          <button
            onClick={() => navigate("/selectpropertytype")}
            className="text-neutral-coolGray font-[500] capitalize transition-all duration-300 hover:text-primary-marineBlue cursor-pointer"
          >
            Back
          </button>

          <button
            className="bg-primary-marineBlue text-white border-0 rounded-md px-6 py-3 transition-all duration-300 hover:opacity-75"
            type="sumbit"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default FinancingOption;
