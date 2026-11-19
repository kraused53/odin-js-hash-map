const hm = require("../../hash-map/hash-map");

// Empty
test("has() returns undefined on empty map", () => {
  const myHM = new hm();

  expect(myHM.has("key")).toBe(false);
});

// Errors
test("has() throws TypeError on null key.", () => {
  const myHM = new hm();

  myHM.set("key", "value");

  expect(() => {
    myHM.has(null);
  }).toThrow(TypeError);
});

test("has() throws TypeError on non string key.", () => {
  const myHM = new hm();

  myHM.set("key", "value");

  expect(() => {
    myHM.has(12345.6789);
  }).toThrow(TypeError);
});

test("has() throws TypeError on empty key.", () => {
  const myHM = new hm();

  myHM.set("key", "value");

  expect(() => {
    myHM.has("");
  }).toThrow(TypeError);
});

// Basic operation
test("has() returns true for existing key", () => {
  const myHM = new hm();

  myHM.set("key", "value");

  expect(myHM.has("key")).toBe(true);
});

test("has() returns false for non-existing key", () => {
  const myHM = new hm();

  myHM.set("key", "value");

  expect(myHM.has("no-a-key")).toBe(false);
});

test("has() returns true for updated kvp", () => {
  const myHM = new hm();

  myHM.set("key", "value");
  myHM.set("key", "new-value");

  expect(myHM.has("key")).toBe(true);
});

test("has() returns false for removed kvp", () => {
  const myHM = new hm();

  myHM.set("key", "value");
  myHM.remove("key");

  expect(myHM.has("key")).toBe(false);
});

test("has() returns true for any key in map", () => {
  const myHM = new hm();

  // Add 50 unique keys to the map
  for (let i = 0; i < 50; i++) {
    myHM.set(`key-${i}`, `value-${i}`);
  }

  // Has works for each key in map
  for (let i = 0; i < 13; i++) {
    expect(myHM.has(`key-${i}`)).toBe(true);
  }
});
