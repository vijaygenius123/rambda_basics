const R = require('ramda')
const cities = require('./cities.json')

const KtoC = temp => temp - 273.15
const KtoF = temp => temp * 9 / 5 -459.67

const updateTemperature = R.curry((convertFn,city) => {
        const temp = convertFn(city.temp)
        return R.mergeRight(city, {temp})
})


const updatedCities = cities.map(updateTemperature(KtoC))

console.log(updatedCities)
