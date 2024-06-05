import React from "react";
import { useNavigate } from "react-router-dom";
import { Slider } from '@mui/material';
import Box from '@mui/material/Box';


const Results = () => {
  const navigate = useNavigate();

  function valuetext(value) {
    return `${value}`;
  }

  const handleBackClick = () => {
    navigate('/summary');
  };

  return (
    <div className="max-h-screen bg-gray-100 p-4 m-8" >
        <div>
            <h1 className="text-5xl mt-10 font-bold mb-8 text-center">Summary</h1>

            <div className="bg-gray-100 pt-6">
        
                <div className="bg-red-900 mx-10 rounded-md py-6">
                    <h2 className="ml-12 text-2xl font-bold" style={{ color: '#dda3b0'}}>Savings</h2>
                    <p className="ml-12 mt-2 text-white pb-4 " style={{ color: 'hsl(229, 24%, 87%)'}}>Below is your estimated savings after adopting solar.</p>
                </div>


                <div className="grid grid-cols-6 gap-6 w-screen p-10">
                
                    <div className="bg-white p-6 h-80 rounded-md col-span-2 shadow-md">
                        <h2 className="text-2xl font-bold mb-2">Without Solar</h2>
                        <p className="ml-2"><span style={{ fontSize: '2rem' }}>$243</span> <span style={{ fontSize: '1rem' }}>owing</span></p>
                    </div>
                
                    <div className="bg-white p-6 h-80 rounded-md col-span-2 shadow-md">
                        <div className="flex items-center space-x-4">
                            <h2 className="text-2xl font-bold mb-2">With Solar</h2>
                        </div>

                        <p className="text-3xl">$100</p>
                        <p className="pt-8 text-lg font-bold">How this is calculated:</p>
                        
                        <div className="flex items-center space-x-16 ">
                            <p className="pt-3 text-md">Your current electricity bill</p>
                            <p className="pt-3 text-lg">$234</p>
                        </div>

                        <p className="float-right text-lg "> - </p>

                        <div className="flex items-center space-x-16 mt-3">
                            <p className="pt-3 text-md">Savings from your solar system</p>
                            <p className="pt-3 text-lg">$134</p>
                        </div>
                    </div>

                    <div className="bg-white p-6 h-80 rounded-md col-span-2 flex flex-col items-center shadow-md">
                        <h2 className="text-2xl font-bold mb-2">With Solar and Battery</h2>
                        <p>See how your bills compare when you add a battery</p>
                        <button className="bg-blue-300 rounded-md p-4 mt-10 font-bold">Add a Battery</button>
                    </div>

                    <div className="bg-red-900  rounded-md py-6 col-span-6 my-4">
                        <h2 className="ml-12 text-2xl font-bold text-white" style={{ color: '#dda3b0'}}>Solar Efficiency Metrics</h2>
                        <p className="ml-12 mt-2 text-white pb-4" style={{ color: 'hsl(229, 24%, 87%)'}}>Below is your overview of key performance indicators related to your solar system's efficiency.</p>
                    </div>

                    <div className="bg-white p-6 h-80 rounded-md col-span-3 flex flex-col justify-between shadow-md">
                        <div>
                            <h2 className="text-2xl font-bold mb-2">Energy Self-Sufficiency</h2>
                            <p>Self-sufficiency is the estimated percentage of your electricity use that comes from solar generation</p>
                            
                            <Slider
                                aria-label="Always visible"
                                defaultValue={30}
                                getAriaValueText={valuetext}
                                step={10}
                                valueLabelDisplay="on"
                                className="mt-12"
                                />
                        </div>
                        <p>You can increase self-sufficiency by adding a battery or shifting your electricity usage into times when sun is shining</p>
                    </div>

                    <div className="bg-white p-6 h-80 rounded-md col-span-3 shadow-md flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl font-bold mb-2">Solar Self-Consumption</h2>
                            <p>Self-consumption is the percentage of total solar generation that is used on the property</p>
                            <Slider
                                aria-label="Always visible"
                                defaultValue={50}
                                getAriaValueText={valuetext}
                                step={10}
                                // marks={marks}
                                valueLabelDisplay="on"
                                className="mt-12"
                                />
                        </div>
                        <p>A lower self-consumption means that you are sending more of your solar electricity to the grid, rather than using it on site</p>
                    </div>

                    <div className="bg-red-900  rounded-md py-6 col-span-6 my-4 ">
                        <h2 className="ml-12 text-2xl font-bold text-white" style={{ color: '#dda3b0'}}>Environmental Impact</h2>
                        <p className="ml-12 mt-2 text-white pb-4" style={{ color: 'hsl(229, 24%, 87%)'}}>Below is an overview of your solar system's contribution to reducing carbon emissions and its equivalent environmental benefits.</p>
                    </div>

                    <div className="bg-white p-6 h-56 rounded-md shadow-md col-span-4 flex flex-col items-center justify-center">
                        <h2 className="text-2xl font-bold mb-2">Annual Carbon Emissions Reduction</h2>
                        <p className="text-2xl">42 kg</p>
                        <p className="pt-3"> After installing solar </p>
                    </div>

                    <div className="bg-white p-6 h-56 rounded-md col-span-2 shadow-md flex flex-col items-center justify-center text-center">
                        <h2 className="text-2xl font-bold mb-2">This is equivalent to</h2>
                        <p className="pt-2"> <span className="font-bold"> 5 </span> x Average household's annual carbon emissions</p>
                        <p className="pt-4"><span className="font-bold"> 20 </span> Sydney to Melbourne Trips</p>
                    </div>

                    <div className="flex justify-center items-center col-span-6 pt-4">
                        <button className="p-4 px-8 bg-gray-200 rounded-md mx-2 hover:bg-gray-400" onClick={handleBackClick}>Back</button>
                        <button className="p-4 px-8 bg-gray-200 rounded-md mx-2 hover:bg-gray-400">Print</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

  );
};

export default Results;
