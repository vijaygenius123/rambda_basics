const cities = require('./cities.json')

const KtoC = temp => temp - 273.15

const updateTemperature = city => {
    const temp = KtoC(city.temp)
    return {...city, temp}
}


const updatedCities = cities.map(updateTemperature)

console.log(updatedCities)
