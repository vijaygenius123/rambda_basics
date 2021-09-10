const R = require('ramda')
const cities = require('./cities.json')

const KtoC = temp => temp - 273.15
const KtoF = temp => temp * 9 / 5 -459.67

const updateTemperature = convertFn => {
    return city => {
        const temp = convertFn(city.temp)
        return R.mergeRight(city, {temp})
    }
}


const updatedCities = cities.map(updateTemperature(KtoF))

console.log(updatedCities)
