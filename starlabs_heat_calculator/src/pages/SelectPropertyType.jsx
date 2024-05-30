import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import PropertyContext from "../context/PropertyContext";



const SelectPropertyType = () => {
  const navigate = useNavigate();
  const [num, setNum] = useState(0);

  const { propertyType } = useContext(PropertyContext);
  const { selectedPropertyType } = useContext(PropertyContext);


  const getPropertyDetails = (id) => {
    selectedPropertyType.title = propertyType[id].title;

    setNum(id + 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedPropertyType.title !== "") {
      navigate("/financingoption");
    } else {
      alert("Please choose a property type");
    }
  };

  return (
    <div className="sm:basis-[60%] w-[300px] sm:w-[100%] h-[100%] sm:pr-[80px]">
      <h1 className="mt-10 text-3xl font-[800] mb-2 text-primary-marineBlue">
        Select your property type.
      </h1>
      <p className="text-neutral-coolGray mb-6">
        You have the option of the following types.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col relative">
        <div
          className={`plansMonthly mb-8 flex flex-col sm:flex-row justify-between cursor-pointer`}
        >
          {propertyType.map((item, idx) => {
            return (
              <div
                onClick={() => getPropertyDetails(idx)}
                key={item.id}
                className={`plan ${
                  num != idx + 1 ? "bg-white" : "bg-primary-lightBlue"
                } border-2 ${
                  num != idx + 1
                    ? "border-neutral-lightGray"
                    : "border-primary-purplishBlue"
                } rounded-md p-4 flex items-center justify-around mb-4 sm:mb-0 sm:block basis-[31%] transition-all duration-300 hover:border-primary-purplishBlue`}
              >
                <img className="sm:mb-10" src={item.img} alt="plan image" />
                <h4 className="text-primary-marineBlue font-[500]">
                  {item.title}
                </h4>
              </div>
            );
          })}
        </div>

        <div className="flex justify-between items-center">
          <button
            onClick={() => navigate("/monthlybill")}
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

export default SelectPropertyType;
