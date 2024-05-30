import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PropertySize = () => {
  const navigate = useNavigate();
  const [propertySize, setPropertySize] = useState("");


  const [propertySizeAlert, setPropertySizeAlert] = useState(false);


  const handleSumbit = (event) => {
    event.preventDefault();

    if (propertySize === "") {
      setPropertySizeAlert(true);
    } else {
      setPropertySizeAlert(false);
    }


    if (propertySize !== "") {
      navigate("/monthlybill");
    }
  };

  return (
    <div className="sm:basis-[60%] w-[300px] sm:w-[100%] h-[100%] sm:pr-[80px]">
      <h1 className="mt-10 text-3xl font-[800] mb-2 text-primary-marineBlue">
        Property Size
      </h1>
      <p className="text-neutral-coolGray mb-6">
        Please provide the property size (in meters squared)
      </p>
      <form onSubmit={handleSumbit} className="flex flex-col">
        <div className="form-wrapper flex flex-col relative">
          <label className="text-primary-marineBlue font-[500] mb-2">
            Property Size
          </label>
          <input
            onChange={(e) => setPropertySize(e.target.value)}
            className={`${
              propertySizeAlert
                ? "focus:outline-primary-strawberryRed"
                : "focus:outline-primary-marineBlue"
            } mb-6 outline outline-1 outline-neutral-lightGray rounded-[4px] p-3 `}
            type="text"
            placeholder="e.g. 2400"
          />
          <span
            className={`${
              propertySizeAlert ? "inline" : "hidden"
            } text-primary-strawberryRed font-[500] absolute right-[10px]`}
          >
            This field is required
          </span>
          
        </div>
        
        <div className="flex justify-between items-center">
          <button
            onClick={() => navigate("/")}
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

export default PropertySize;
