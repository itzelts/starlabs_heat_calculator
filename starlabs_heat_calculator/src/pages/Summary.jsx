import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PropertyContext from "../context/PropertyContext";


const Summary = () => {
  const navigate = useNavigate();
  const { selectedPropertyType } = useContext(PropertyContext);

  return (
    <div className="sm:basis-[60%] w-[300px] sm:w-[100%] h-[100%] sm:pr-[80px] text-center">
      <h1 className="mt-10 text-3xl font-[800] mb-2 text-primary-marineBlue">
        Finshing up
      </h1>
      <p className="text-neutral-coolGray mb-6 hidden sm:block">
        Double-check everything looks OK before confirming.
      </p>
      <p className="text-neutral-coolGray mb-6 sm:hidden">
        Double-check everything <br /> looks OK before confirming.
      </p>
      <div className="bg-neutral-alabaster rounded-lg p-5">
        <div className="plan flex justify-between items-center mb-4">
          <div>
            <span className="text-primary-marineBlue font-[800]">
              {selectedPropertyType.title} 
            </span>
            <p
              onClick={() => navigate("/selectpropertytype")}
              className="text-neutral-coolGray underline cursor-pointer"
            >
              Change
            </p>
          </div>
        </div>

        <hr />
      </div>

      <div className="flex justify-around sm:justify-between items-center pt-[260px] sm:pt-[79px]">
        <button
          onClick={() => navigate("/selectpropertytype")}
          className="text-neutral-coolGray font-[500] capitalize transition-all duration-300 hover:text-primary-marineBlue cursor-pointer"
        >
          Back
        </button>

        <button
          className="bg-primary-purplishBlue text-white border-0 rounded-md px-6 py-3 transition-all duration-300 hover:opacity-75"
          onClick={() => navigate("/thankyou")}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Summary;
