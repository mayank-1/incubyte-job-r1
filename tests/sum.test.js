const sum = require("./../sum");

test("empty string", () => {
  expect(sum("")).toBe(0);
});
