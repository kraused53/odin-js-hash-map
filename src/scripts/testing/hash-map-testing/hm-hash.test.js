const hm = require("../../hash-map/hash-map");
const myHM = new hm();

test("hash(key-1) produces a number between 0 and 15", () => {
  const index = myHM.hash("key-1");
  expect(index).toBeGreaterThanOrEqual(0);
  expect(index).toBeLessThanOrEqual(15);
});

test("hash(a number) produces a type error", () => {
  expect(() => myHM.hash(1234)).toThrow(TypeError);
});

test("hash(null) produces a type error", () => {
  expect(() => myHM.hash(null)).toThrow(TypeError);
});

test("hash('') produces a type error", () => {
  expect(() => myHM.hash("")).toThrow(TypeError);
});

test("hash(key-1) produces a the same index on multiple calls", () => {
  const index = myHM.hash("key-1");
  for (let i = 0; i < 50; i++) {
    expect(myHM.hash("key-1")).toBe(index);
  }
});

test("hash() can produce different index values", () => {
  const indexOne = myHM.hash("key-1");
  const indexTwo = myHM.hash("key-2");
  expect(indexOne === indexTwo).toBe(false);
});
