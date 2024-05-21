const xlsx = require('xlsx');
const path = require('path');
const fs = require('fs');

const currentDir = __dirname;
const rootDir = path.resolve(currentDir, '..'); 
const dataDir = path.join(rootDir, 'data');

const excelFilePath = path.join(dataDir, 'simulated_data5_15_2024.xlsx');
const outputFilePath = path.join('simulated_data_with_savings.xlsx');

// loads the excel file
const workbook = xlsx.readFile(excelFilePath);
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// converts the sheet to JSON
const data = xlsx.utils.sheet_to_json(worksheet);

// calculate weekly savings
function calculateSavings(weeklyEnergyUse, energyPrice, weeklySolarGenerate, feedInTariffRate, solarSystemCost) {
    const savings = (weeklyEnergyUse * energyPrice) - (weeklySolarGenerate * feedInTariffRate) - (solarSystemCost / 52);
    return savings;
}

// iterate through each row in the data and calculate the savings
data.forEach((row) => {
    const {
        Weekly_Energy_Use_KiloHr,
        Energy_Price_KiloHr,
        Solar_Generate_KiloHr,
        Solar_System_Cost,
        FeedIn_Tariff_Rate
    } = row;

    // check all the necessary fields are present
    if (
        Weekly_Energy_Use_KiloHr !== undefined &&
        Energy_Price_KiloHr !== undefined &&
        Solar_Generate_KiloHr !== undefined &&
        Solar_System_Cost !== undefined &&
        FeedIn_Tariff_Rate !== undefined
    ) {
        // calculate the savings
        const savings = calculateSavings(
            parseFloat(Weekly_Energy_Use_KiloHr),
            parseFloat(Energy_Price_KiloHr),
            parseFloat(Solar_Generate_KiloHr),
            parseFloat(FeedIn_Tariff_Rate),
            parseFloat(Solar_System_Cost)
        );

        // add the savings to the row
        row.Savings_Per_Week = savings.toFixed(2);
    }
});

// convert the JSON data back to a worksheet
const newWorksheet = xlsx.utils.json_to_sheet(data);

// add the new worksheet to a new workbook
const newWorkbook = xlsx.utils.book_new();
xlsx.utils.book_append_sheet(newWorkbook, newWorksheet, sheetName);

// write the new Excel file
xlsx.writeFile(newWorkbook, outputFilePath);

// print update 
console.log(`The file has been saved with savings as a new column: ${outputFilePath}`);
