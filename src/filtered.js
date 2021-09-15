const R = require('ramda')
const {updatedCities} = require('./cities')


const filterByWeather = city => {
    const {temp = 0, humidity = 0} = city
    return temp > 68 && temp < 85 && humidity > 30 && humidity < 70
}

const filteredCities = R.filter(filterByWeather, updatedCities)

console.log(R.length(filteredCities))
