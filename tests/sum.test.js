const sum = require("./../sum");

test("empty string", () => {
  expect(sum("")).toBe(0);
});

test("1 number string", () => {
  expect(sum("1")).toBe(1);
});

test("2 number string", () => {
  expect(sum("1,5")).toBe(6);
});
