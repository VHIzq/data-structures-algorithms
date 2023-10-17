const powerNumber = (base, power) => {
  const isDiffentThanZero = base !== 0 && power !== 0;
  if (!isDiffentThanZero) {
    console.log("Try a number diffent than zero");
  }
  let acc = base;
  while (power > 1) {
    acc *= base;
    power--;
  }
  console.log("Answer: ", acc);
};
//powerNumber(5, 3);

const factorialNumber = (factorial) => {
  let acc = 1;
  for (let index = 1; index <= factorial; index++) {
    acc *= index;
  }
  console.log("Answer: ", acc);
};
//factorialNumber(5);

const primeNumber = (ele) => {
  for (let index = 2; index < ele / 2; index++) {
    const isDivisible = ele % index === 0;
    return isDivisible ? "Not prime" : "Is Prime";
  }
};

//console.log(primeNumber(100))

const perfectNumber = (number) => {
  let acc = 1;
  for (let index = 1; index <= number; index++) {
    const isDivider = number % index === 0;
    console.log(index, isDivider);
    if (isDivider) {
      acc += index;
    }
  }
  const isPerfectNumber = acc === number;
  return isPerfectNumber ? "Is perfect number" : "Not perfect number";
};

const number = 28;
const isPerfectNumber = perfectNumber(number);

if (isPerfectNumber) {
  console.log(`${number} is a perfect number`);
} else {
  console.log(`${number} is not a perfect number`);
}


const guayNumber = (number) => {
  
}