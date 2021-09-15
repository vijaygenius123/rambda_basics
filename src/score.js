const R = require('ramda')
const {updatedCities} = require('./cities')

const groupByPropReducer = (acc, city) => {
    const {cost=[], internetSpeed = []} = acc
    return R.mergeRight(acc, {
        cost: R.append(city.cost, cost),
        internetSpeed: R.append(city.internetSpeed, internetSpeed)
    })
}


const groupByProp = R.reduce(groupByPropReducer, {}, updatedCities)

const percentile = (arr, val) =>
    (100 *
        arr.reduce(
            (acc, v) => acc + (v < val ? 1 : 0) + (v === val ? 0.5 : 0),
            0
        )) /
    arr.length;



const calcScore = city => {
    const {cost = 0, internetSpeed = 0} = city;
    const costPercentile = percentile(groupByProp.cost, cost)
    const internetSpeedPercentile = percentile(groupByProp.internetSpeed, internetSpeed)
    const score =
        (100.0 - costPercentile) + .2 * internetSpeedPercentile
    return R.mergeRight(city,{
        score
    })
}

const scoredCities = R.map(calcScore, updatedCities)

console.log(scoredCities)
