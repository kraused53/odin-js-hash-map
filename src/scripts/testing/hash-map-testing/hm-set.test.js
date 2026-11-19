const hm = require("../../hash-map/hash-map");

test("set() with new key changes the size of the map", () => {
  const myHM = new hm();

  // Add 10 unique keys to the map, length should be 10
  for (let i = 0; i < 10; i++) {
    myHM.set(`key-${i}`, `value-${i}`);
  }

  expect(myHM.length()).toBe(10);
});

test("set() with repeated key will not change the size of the map", () => {
  const myHM = new hm();

  // Add 10 unique keys to the map, length should be 10
  for (let i = 0; i < 10; i++) {
    myHM.set(`key-${i}`, `value-${i}`);
  }

  // Add 10 repeated keys to the map, length should still be 10
  for (let i = 0; i < 10; i++) {
    myHM.set(`key-${i}`, `new-value-${i}`);
  }

  expect(myHM.length()).toBe(10);
});

test("set() will not trigger refactor when the load_factor reaches it's limit. Only when adding above limit", () => {
  const myHM = new hm();

  // Load will change when adding the 13th
  // 16 * 0.75 = 12. 12 items will put the map at a load factor 0.75

  // Add 12 unique keys to the map, capacity should still be 16
  for (let i = 0; i < 12; i++) {
    myHM.set(`key-${i}`, `value-${i}`);
  }

  expect(myHM.capacity).toBe(16);
});

test("set() will trigger refactor when the load_factor exceeds it's limit.", () => {
  const myHM = new hm();

  // Load will change when adding the 13th
  // 16 * 0.75 = 12. 12 items will put the map at a load factor 0.75

  // Add 13 unique keys to the map, capacity should now be 32
  for (let i = 0; i < 13; i++) {
    myHM.set(`key-${i}`, `value-${i}`);
  }

  expect(myHM.capacity).toBe(32);
});

test("set() refactoring does not change the size of the map.", () => {
  const myHM = new hm();

  // Add 13 unique keys to the map, capacity should now be 32
  for (let i = 0; i < 13; i++) {
    myHM.set(`key-${i}`, `value-${i}`);
  }

  expect(myHM.length()).toBe(13);
});

test("set() throws TypeError on null key.", () => {
  const myHM = new hm();

  expect(() => {
    myHM.set(null, "value");
  }).toThrow(TypeError);
});

test("set() throws TypeError on non string key.", () => {
  const myHM = new hm();

  expect(() => {
    myHM.set(12345.6789, "value");
  }).toThrow(TypeError);
});

test("set() throws TypeError on empty key.", () => {
  const myHM = new hm();

  expect(() => {
    myHM.set("", "value");
  }).toThrow(TypeError);
});
