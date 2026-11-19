const hm = require("../../hash-map/hash-map");

// Empty list
test("entries() returns [] on empty map", () => {
  const myHM = new hm();

  expect(JSON.stringify(myHM.entries())).toBe("[]");
});

// Basic operation
test("entries() returns key: single", () => {
  const myHM = new hm();

  myHM.set("key", "value");

  expect(JSON.stringify(myHM.entries())).toBe('[["key","value"]]');
});

test("entries() returns key: single", () => {
  const myHM = new hm();

  myHM.set("key", "value");

  expect(JSON.stringify(myHM.entries())).toBe('[["key","value"]]');
});

test("entries() returns new key after update: single", () => {
  const myHM = new hm();

  myHM.set("key", "value");
  myHM.set("key", "new-value");

  expect(JSON.stringify(myHM.entries())).toBe('[["key","new-value"]]');
});

test("entries() returns [] after all remove: single", () => {
  const myHM = new hm();

  myHM.set("key", "value");
  myHM.remove("key");

  expect(JSON.stringify(myHM.entries())).toBe("[]");
});

test("entries() returns [] after update and remove: single", () => {
  const myHM = new hm();

  myHM.set("key", "value");
  myHM.set("key", "new-value");
  myHM.remove("key");

  expect(JSON.stringify(myHM.entries())).toBe("[]");
});

test("entries() returns entries: multiple", () => {
  const myHM = new hm();

  // New nodes. Length will be 10
  for (let i = 9; i >= 0; i--) {
    myHM.set(`key-${i}`, `value-${i}`);
  }

  const listEntries = myHM.entries();

  // Ensure that every value added to the list is still in the list
  expect(JSON.stringify(listEntries)).toBe(
    '[["key-0","value-0"],["key-1","value-1"],["key-2","value-2"],["key-3","value-3"],["key-4","value-4"],["key-5","value-5"],["key-6","value-6"],["key-7","value-7"],["key-8","value-8"],["key-9","value-9"]]',
  );
});

test("entries() returns entries after update: multiple", () => {
  const myHM = new hm();

  const entries = [];
  // New nodes. Length will be 10
  for (let i = 9; i >= 0; i--) {
    entries.push([`key-${i}`, `value-${i}`]);
    myHM.set(`key-${i}`, `value-${i}`);
  }

  // Update some entries
  myHM.set("key-6", "new-value");
  myHM.set("key-4", "new-value");

  const listEntries = myHM.entries();

  // Ensure that every value added to the list is still in the list
  expect(JSON.stringify(listEntries)).toBe(
    '[["key-0","value-0"],["key-1","value-1"],["key-2","value-2"],["key-3","value-3"],["key-4","new-value"],["key-5","value-5"],["key-6","new-value"],["key-7","value-7"],["key-8","value-8"],["key-9","value-9"]]',
  );
});

test("keys() returns entries after remove: multiple", () => {
  const myHM = new hm();

  // New nodes. Length will be 10
  for (let i = 9; i >= 0; i--) {
    myHM.set(`key-${i}`, `value-${i}`);
  }

  // remove some entries
  myHM.remove("key-6");
  myHM.remove("key-4");

  const listEntries = myHM.entries();

  // Ensure that every value added to the list is still in the list
  expect(JSON.stringify(listEntries)).toBe(
    '[["key-0","value-0"],["key-1","value-1"],["key-2","value-2"],["key-3","value-3"],["key-5","value-5"],["key-7","value-7"],["key-8","value-8"],["key-9","value-9"]]',
  );
});

test("keys() returns entries after update and remove: multiple", () => {
  const myHM = new hm();

  // New nodes. Length will be 10
  for (let i = 9; i >= 0; i--) {
    myHM.set(`key-${i}`, `value-${i}`);
  }

  // remove some keys
  myHM.remove("key-6");
  myHM.remove("key-4");

  // Update a key
  myHM.set("key-0", "new-value");

  const listEntries = myHM.entries();

  // Ensure that every value added to the list is still in the list
  expect(JSON.stringify(listEntries)).toBe(
    '[["key-0","new-value"],["key-1","value-1"],["key-2","value-2"],["key-3","value-3"],["key-5","value-5"],["key-7","value-7"],["key-8","value-8"],["key-9","value-9"]]',
  );
});
