# Load necessary libraries
library(dplyr)
library(readxl)
library(writexl)


# Define the postcodes and their attributes
postcodes <- c(2021, 2027, 2000) # Example affluent postcodes in Sydney


#Average household size in Sydney is approximately 2.5 people per household
#(Reserve Bank of Australia) (Australian Institute of Family Studies)
household_sizes <- c(1, 2.5, 3, 4) 

#Average energy expentidure in Sydney is 40-60AUD/week
#https://www.rba.gov.au/publications/bulletin/2023/mar/pdf/a-new-measure-of-average-household-size.pdf#:~:text=URL%3A%20https%3A%2F%2Fwww.rba.gov.au%2Fpublications%2Fbulletin%2F2023%2Fmar%2Fpdf%2Fa
avg_expenditures <- c(40, 50, 60) 

#Average weekly energy usage in Sydney households is approximately 350 to 550 kWh. 
#This estimate considers typical household energy consumption patterns in urban areas 
#with a focus on higher consumption in larger homes(Reserve Bank of Australia)
avg_uses <- c(350, 450, 550) # in KiloHr


#Average price of electricity in Sydney is about AUD 0.25 to 0.30 per kWh (Reserve Bank of Australia)
avg_prices <- c(0.25, 0.28, 0.30) # Price per KiloHr in AUD

#Average amount of electricity that can be produced by a solar panel in Australia in kWh/week
#https://solaremporium.com.au/blog/how-much-energy-does-one-solar-panel-produce-in-australia/#:~:text=Energy%20Production%20of%20a%20Single%20Solar%20Panel%20in%20Australia&text=It%20is%20approximately%201.2%20to,across%20different%20parts%20of%20Australia.
solar_generate_kwh <- c(8.4, 10.36)

energy_sources <- c("solar", "electricity", "gas")

insulation_types <- c("good", "average", "poor", "don't know")

roof_types <- c("tile", "metal", "shingle", "don't know")


#Average cost of solar system in Sydney
#https://isolux.com.au/are-solar-panels-worth-it-in-sydney-australia/#:~:text=In%20conclusion%2C%20Yes%2C%20solar%20panels,to%20$500%20per%20quarterly%20bill.
solar_system_cost <- c(5500, 6500, 7500, 8500)


#Average Feed in tariff rate in Australia per kWh
#https://www.renewenergy.com.au/how-much-can-you-save-with-solar-panels/
feed_tariff_rate <- c(0.07, 0.09, 0.11)

# Simulate data
set.seed(514) # For reproducibility
simulated_data <- data.frame(
  PostCode = sample(postcodes, 100, replace = TRUE),
  HouseholdSize = sample(household_sizes, 100, replace = TRUE),
  Weekly_Energy_Expend_Avg = sample(avg_expenditures, 100, replace = TRUE),
  Dwelling_Type = sample(c("Single family home", "Semi Detached",
                           "Two family home", "Apartment"), 100, replace = TRUE),
  Weekly_Energy_Use_KiloHr = sample(avg_uses, 100, replace = TRUE),
  Energy_Price_KiloHr = sample(avg_prices, 100, replace = TRUE),
  Solar_Generate_KiloHr = sample(solar_generate_kwh, 100, replace = TRUE),
  Solar_System_Cost = sample(solar_system_cost, 100, replace = TRUE),
  Avg_Energy_Source = sample(energy_sources, 100, replace = TRUE),
  FeedIn_Tariff_Rate = sample(feed_tariff_rate, 100, replace = TRUE), 
  Insulation = sample(insulation_types, 100, replace = TRUE),
  Rooftype = sample(roof_types, 100, replace = TRUE)
)

# Write the simulated data back to Excel
write_xlsx(simulated_data, "/Users/aleksandraconevska/Dropbox/harvard/STARLab/CBA/heat/calculator/starlabs-heat_calculator/data")

# Print the first few rows of the simulated data
head(simulated_data)



#savings 

#savings = (Weekly_Energy_Use_KiloHr * Energy_Price_KiloHr) - (Solar_Generate_KiloHr * FeedIn_Tariff_Rate) - (Solar_System_cost / 10)





