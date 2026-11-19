const hm = require("../../hash-map/hash-map");

// Empty
test("get() returns undefined on empty map", () => {
  const myHM = new hm();

  expect(myHM.get("key")).toBe(undefined);
});

// Errors
test("get() throws TypeError on null key.", () => {
  const myHM = new hm();

  myHM.set("key", "value");

  expect(() => {
    myHM.get(null);
  }).toThrow(TypeError);
});

test("get() throws TypeError on non string key.", () => {
  const myHM = new hm();

  myHM.set("key", "value");

  expect(() => {
    myHM.get(12345.6789);
  }).toThrow(TypeError);
});

test("get() throws TypeError on empty key.", () => {
  const myHM = new hm();

  myHM.set("key", "value");

  expect(() => {
    myHM.get("");
  }).toThrow(TypeError);
});

// Basic operation
test("get() returns value of previously entered key", () => {
  const myHM = new hm();

  myHM.set("key", "value");

  expect(myHM.get("key")).toBe("value");
});

test("get() returns value of updated kvp", () => {
  const myHM = new hm();

  myHM.set("key", "value");
  myHM.set("key", "new-value");

  expect(myHM.get("key")).toBe("new-value");
});

test("get() returns undefined for deleted key", () => {
  const myHM = new hm();

  myHM.set("key", "value");
  myHM.remove("key");

  expect(myHM.get("key")).toBe(undefined);
});

test("get() returns undefined for non-existent key", () => {
  const myHM = new hm();

  myHM.set("key", "value");

  expect(myHM.get("not-a-key")).toBe(undefined);
});

test("get() returns value of updated kvp", () => {
  const myHM = new hm();

  // Add 13 unique keys to the map
  for (let i = 0; i < 13; i++) {
    myHM.set(`key-${i}`, `value-${i}`);
  }

  // Fetch each number that was just added
  for (let i = 0; i < 13; i++) {
    expect(myHM.get(`key-${i}`)).toBe(`value-${i}`);
  }
});

test("get() returns value of updated kvp", () => {
  const myHM = new hm();

  // Add 13 unique keys to the map
  for (let i = 0; i < 13; i++) {
    myHM.set(`key-${i}`, `value-${i}`);
  }

  // Update all of them
  for (let i = 0; i < 13; i++) {
    myHM.set(`key-${i}`, `new-value-${i}`);
  }
  1;

  // Fetch each number that was just added. Should all be the new value
  for (let i = 0; i < 13; i++) {
    expect(myHM.get(`key-${i}`)).toBe(`new-value-${i}`);
  }
});
