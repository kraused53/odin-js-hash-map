const hm = require("../../hash-map/hash-map");

// Empty
test("remove() does nothing on empty map", () => {
  const myHM = new hm();

  expect(() => {
    myHM.remove("key");
  }).not.toThrow();
});

// Errors
test("remove() throws TypeError on null key.", () => {
  const myHM = new hm();

  myHM.set("key", "value");

  expect(() => {
    myHM.remove(null);
  }).toThrow(TypeError);
});

test("remove() throws TypeError on non string key.", () => {
  const myHM = new hm();

  myHM.set("key", "value");

  expect(() => {
    myHM.remove(12345.6789);
  }).toThrow(TypeError);
});

test("remove() throws TypeError on empty key.", () => {
  const myHM = new hm();

  myHM.set("key", "value");

  expect(() => {
    myHM.remove("");
  }).toThrow(TypeError);
});

// Basic operation
test("remove() with existing key reduces size: single", () => {
  const myHM = new hm();

  myHM.set("key", "value");
  myHM.remove("key");

  expect(myHM.length()).toBe(0);
});

test("remove() with existing key reduces size: multiple", () => {
  const myHM = new hm();

  // Add 13 unique keys to the map
  for (let i = 0; i < 13; i++) {
    myHM.set(`key-${i}`, `value-${i}`);
  }

  myHM.remove("key-6");

  expect(myHM.length()).toBe(12);
});

test("remove() with non-existing key does not reduce size: single", () => {
  const myHM = new hm();

  myHM.set("key", "value");
  myHM.remove("not-a-key");

  expect(myHM.length()).toBe(1);
});

test("remove() with non-existing key does not reduce size: multiple", () => {
  const myHM = new hm();

  // Add 13 unique keys to the map
  for (let i = 0; i < 13; i++) {
    myHM.set(`key-${i}`, `value-${i}`);
  }

  myHM.remove("not-a-key");

  expect(myHM.length()).toBe(13);
});

test("remove() only removes the correct key", () => {
  const myHM = new hm();

  // Add 30 unique keys to the map
  for (let i = 0; i < 30; i++) {
    myHM.set(`key-${i}`, `value-${i}`);
  }

  myHM.remove("key-29");

  // Fetch each number that was just added
  for (let i = 0; i < 29; i++) {
    expect(myHM.get(`key-${i}`)).toBe(`value-${i}`);
  }
});
