// Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    for (const obj of arr) {
      let orbitsSemiMajorAxis = Math.pow((obj.avgAlt + earthRadius), 3)
      let orbitalPeriodMath = (2 * Math.PI) * Math.sqrt(orbitsSemiMajorAxis / GM)
      delete obj.avgAlt
      obj.orbitalPeriod = parseInt(orbitalPeriodMath.toFixed())
    }
    return arr;
  }