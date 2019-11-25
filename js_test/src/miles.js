const readlineSync = require('readline-sync');

let origin = readlineSync.question('\nEnter an origin unit: ');

while (origin !== 'miles') {
  origin = readlineSync.question('Enter an origin unit: ');
}

let destination = readlineSync.question('Enter an destination unit: ');

while (destination !== 'inches') {
  destination = readlineSync.question('Enter an destination unit: ');
}

let value = readlineSync.question('Enter a Value: ');
value = 2.0;
valueInYards = value * 1760;

valueInFeet = valueInYards * 3;

valueInInches = valueInFeet * 12;

valueInInches = valueInInches.toLocaleString();



console.log('\nThere are ' + valueInInches + ' inches in 2.0 miles.');
