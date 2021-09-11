const R = require('ramda')
const cities = require('./cities.json')

const totalCostReducer = (acc, city) => {
    const {cost = 0} = city;
    return acc + cost
}

const totalCost = R.reduce(totalCostReducer, 0, cities)
const cityCount = R.length(cities)

console.log(totalCost/cityCount)
