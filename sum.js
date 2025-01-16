const sum = (numbers) => {
  if (!Array.isArray(numbers) || typeof numbers !== "number") return 0;
  return numbers.reduce((acc, val) => acc + val, 0);
};

module.exports = sum;
