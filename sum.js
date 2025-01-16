const sum = (numbers) => {
  if (typeof numbers !== "string") return 0;
  if (numbers.trim() === "") return 0;

  const normalizedNumbers = numbers.replace(/\n/g, ",");

  return normalizedNumbers.split(",").reduce((acc, val) => {
    const num = parseFloat(val.trim());
    return isNaN(num) ? acc : acc + num;
  }, 0);
};

module.exports = sum;
