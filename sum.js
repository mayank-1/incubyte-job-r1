const sum = (numbers) => {
  if (numbers === "") return 0;
  if (numbers.indexOf(",") === -1) return Number(numbers);
  return numbers.split(",").reduce((acc, val) => acc + BigInt(val), 0);
};

module.exports = sum;
