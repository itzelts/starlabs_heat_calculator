import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Address = () => {
  const navigate = useNavigate();
  const [address, setAddress] = useState("");


  const [addressAlert, setAddressAlert] = useState(false);


  const handleSumbit = (event) => {
    event.preventDefault();

    if (address === "") {
      setAddressAlert(true);
    } else {
      setAddressAlert(false);
    }


    if (address !== "") {
      navigate("/selectpropertytype");
    }
  };

  return (
    <div className="sm:basis-[60%] w-[300px] sm:w-[100%] h-[100%] sm:pr-[80px]">
      <h1 className="mt-10 text-3xl font-[800] mb-2 text-primary-marineBlue">
        Address
      </h1>
      <p className="text-neutral-coolGray mb-6">
        Please provide the property address.
      </p>
      <form onSubmit={handleSumbit} className="flex flex-col">
        <div className="form-wrapper flex flex-col relative">
          <label className="text-primary-marineBlue font-[500] mb-2">
            Address
          </label>
          <input
            onChange={(e) => setAddress(e.target.value)}
            className={`${
              addressAlert
                ? "focus:outline-primary-strawberryRed"
                : "focus:outline-primary-marineBlue"
            } mb-6 outline outline-1 outline-neutral-lightGray rounded-[4px] p-3 `}
            type="text"
            placeholder="e.g. Ajax Avenue, Nelson Bay New South Wales 2315, Australia "
          />
          <span
            className={`${
              addressAlert ? "inline" : "hidden"
            } text-primary-strawberryRed font-[500] absolute right-[10px]`}
          >
            This field is required
          </span>
          
        </div>
        <div className="flex justify-end items-end py-[2px] mt-[120px] sm:mt-[26px]">
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

export default Address;
