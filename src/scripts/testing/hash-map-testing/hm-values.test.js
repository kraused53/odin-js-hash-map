const hm = require("../../hash-map/hash-map");

// Empty list
test("values() returns [] on empty map", () => {
  const myHM = new hm();

  expect(JSON.stringify(myHM.values())).toBe("[]");
});

// Basic operation
test("values() returns key: single", () => {
  const myHM = new hm();

  myHM.set("key", "value");

  expect(JSON.stringify(myHM.values())).toBe('["value"]');
});

test("values() returns key: single", () => {
  const myHM = new hm();

  myHM.set("key", "value");

  expect(JSON.stringify(myHM.values())).toBe('["value"]');
});

test("values() returns new key after update: single", () => {
  const myHM = new hm();

  myHM.set("key", "value");
  myHM.set("key", "new-value");

  expect(JSON.stringify(myHM.values())).toBe('["new-value"]');
});

test("values() returns [] after all remove: single", () => {
  const myHM = new hm();

  myHM.set("key", "value");
  myHM.remove("key");

  expect(JSON.stringify(myHM.values())).toBe("[]");
});

test("values() returns [] after update and remove: single", () => {
  const myHM = new hm();

  myHM.set("key", "value");
  myHM.set("key", "new-value");
  myHM.remove("key");

  expect(JSON.stringify(myHM.values())).toBe("[]");
});

test("values() returns entries: multiple", () => {
  const myHM = new hm();

  // New nodes. Length will be 10
  for (let i = 9; i >= 0; i--) {
    myHM.set(`key-${i}`, `value-${i}`);
  }

  const listEntries = myHM.values();

  // Ensure that every value added to the list is still in the list
  expect(JSON.stringify(listEntries)).toBe(
    '["value-0","value-1","value-2","value-3","value-4","value-5","value-6","value-7","value-8","value-9"]',
  );
});

test("values() returns entries after update: multiple", () => {
  const myHM = new hm();

  const entries = [];
  // New nodes. Length will be 10
  for (let i = 9; i >= 0; i--) {
    entries.push([`key-${i}`, `value-${i}`]);
    myHM.set(`key-${i}`, `value-${i}`);
  }

  // Update some entries
  myHM.set("key-4", "new-value");
  myHM.set("key-6", "new-value");

  const listEntries = myHM.values();

  // Ensure that every value added to the list is still in the list
  expect(JSON.stringify(listEntries)).toBe(
    '["value-0","value-1","value-2","value-3","new-value","value-5","new-value","value-7","value-8","value-9"]',
  );
});

test("values() returns entries after remove: multiple", () => {
  const myHM = new hm();

  // New nodes. Length will be 10
  for (let i = 9; i >= 0; i--) {
    myHM.set(`key-${i}`, `value-${i}`);
  }

  // remove some entries
  myHM.remove("key-6");
  myHM.remove("key-4");

  const listEntries = myHM.values();

  // Ensure that every value added to the list is still in the list
  expect(JSON.stringify(listEntries)).toBe(
    '["value-0","value-1","value-2","value-3","value-5","value-7","value-8","value-9"]',
  );
});

test("values() returns entries after update and remove: multiple", () => {
  const myHM = new hm();

  // New nodes. Length will be 10
  for (let i = 9; i >= 0; i--) {
    myHM.set(`key-${i}`, `value-${i}`);
  }

  // remove some values
  myHM.remove("key-6");
  myHM.remove("key-4");

  // Update a key
  myHM.set("key-0", "new-value");

  const listEntries = myHM.values();

  // Ensure that every value added to the list is still in the list
  expect(JSON.stringify(listEntries)).toBe(
    '["new-value","value-1","value-2","value-3","value-5","value-7","value-8","value-9"]',
  );
});
