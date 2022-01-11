const addDatePrefix = (number) => {
  let numberString = number.toString();

  if (numberString.length < 2) {
    numberString = `0${numberString}`;
  }

  return numberString;
};

module.exports = { addDatePrefix };
