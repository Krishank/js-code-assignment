const _ = require("lodash");
// we can sort it or hande witout sort just beacuse of time constraint i have used this data.
// the min and max year can also be extracted from givien data
var lifeSpanObj = [
  {
    born: 1902,
    died: 1991
  },
  {
    born: 1909,
    died: 1991
  },
  {
    born: 1909,
    died: 2005
  },
  {
    born: 1913,
    died: 2010
  },
  {
    born: 1918,
    died: null
  },
  {
    born: 1957,
    died: null
  },
  {
    born: 1961,
    died: 2002
  },
  {
    born: 1977,
    died: 2003
  },
  {
    born: 1979,
    died: null
  },
  {
    born: 1989,
    died: 2008
  },
  {
    born: 2004,
    died: null
  }
];

const deathCount = [];

for (let year = 1902; year <= 2011; year++) {
  let bornInSpecificYear = _.countBy(lifeSpanObj, function(rec) {
    return rec.born === year;
  });

  let diedInSpecificYear = _.countBy(lifeSpanObj, function(rec) {
    return rec.died === year;
  });

  let bornTillSpecificYear = _.countBy(lifeSpanObj, function(rec) {
    return rec.born <= year && rec.year !== null;
  });

  let diedTillSpecificYear = _.countBy(lifeSpanObj, function(rec) {
    return rec.died < year && rec.died !== null;
  });

  let numberOfBoarnInSpecificYear =
    (bornInSpecificYear && bornInSpecificYear.true) || 0;
  let numberOfDiedInSpecificYear =
    (diedInSpecificYear && diedInSpecificYear.true) || 0;

  let numberOfBornTillSpecificYear =
    (bornTillSpecificYear && bornTillSpecificYear.true) || 0;

  let numberOfDiedTillSpecificYear =
    (diedTillSpecificYear && diedTillSpecificYear.true) || 0;

  let totalPopulationTillSpecificYear =
    numberOfBornTillSpecificYear - numberOfDiedTillSpecificYear;

  let tempObj = {
    year: year,
    born: numberOfBoarnInSpecificYear,
    died: numberOfDiedInSpecificYear,
    numberOfBornTillSpecificYear,
    numberOfDiedTillSpecificYear,
    totalPopulationTillSpecificYear
  };
  deathCount.push(tempObj);
}
console.log(`Yar wise death count and other information`, deathCount);

let output = [];
for (let i = 0; i < deathCount.length; i++) {
  let prev = i - 1;
  if (
    prev >= 0 &&
    deathCount[i].totalPopulationTillSpecificYear <
      deathCount[prev].totalPopulationTillSpecificYear
  ) {
    output.push(deathCount[i].year);
  }
}

console.log(`Final Output is`, output);
