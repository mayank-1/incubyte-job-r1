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

test("multiple numbers string", () => {
  expect(sum("1,2,3,4,5")).toBe(15);
});

test("handles new lines between numbers string", () => {
  expect(sum("1\n2,3")).toBe(6);
});
