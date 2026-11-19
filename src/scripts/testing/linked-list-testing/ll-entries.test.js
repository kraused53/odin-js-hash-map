const ll = require("../../linked-list/linked-list");

// Empty list
test("entries() returns [] on empty list", () => {
  const myLL = new ll();

  expect(JSON.stringify(myLL.entries())).toBe("[]");
});

// Single Items
test("entries() returns key: single", () => {
  const myLL = new ll();

  myLL.add("key", "value");

  expect(JSON.stringify(myLL.entries())).toBe('[["key","value"]]');
});

test("entries() returns new key after update: single", () => {
  const myLL = new ll();

  myLL.add("key", "value");
  myLL.add("key", "new-value");

  expect(JSON.stringify(myLL.entries())).toBe('[["key","new-value"]]');
});

test("entries() returns [] after all remove: single", () => {
  const myLL = new ll();

  myLL.add("key", "value");
  myLL.remove("key");

  expect(JSON.stringify(myLL.entries())).toBe("[]");
});

test("entries() returns [] after update and remove: single", () => {
  const myLL = new ll();

  myLL.add("key", "value");
  myLL.add("key", "new-value");
  myLL.remove("key");

  expect(JSON.stringify(myLL.entries())).toBe("[]");
});

// Multiple Items
test("entries() returns entries: multiple", () => {
  const myLL = new ll();

  // New nodes. Length will be 10
  for (let i = 9; i >= 0; i--) {
    myLL.add(`key-${i}`, `value-${i}`);
  }

  const listEntries = myLL.entries();

  // Ensure that every value added to the list is still in the list
  expect(JSON.stringify(listEntries)).toBe(
    '[["key-0","value-0"],["key-1","value-1"],["key-2","value-2"],["key-3","value-3"],["key-4","value-4"],["key-5","value-5"],["key-6","value-6"],["key-7","value-7"],["key-8","value-8"],["key-9","value-9"]]',
  );
});

test("entries() returns entries after update: multiple", () => {
  const myLL = new ll();

  const entries = [];
  // New nodes. Length will be 10
  for (let i = 9; i >= 0; i--) {
    entries.push([`key-${i}`, `value-${i}`]);
    myLL.add(`key-${i}`, `value-${i}`);
  }

  // Update some entries
  myLL.add("key-6", "new-value");
  myLL.add("key-4", "new-value");

  const listEntries = myLL.entries();

  // Ensure that every value added to the list is still in the list
  expect(JSON.stringify(listEntries)).toBe(
    '[["key-0","value-0"],["key-1","value-1"],["key-2","value-2"],["key-3","value-3"],["key-4","new-value"],["key-5","value-5"],["key-6","new-value"],["key-7","value-7"],["key-8","value-8"],["key-9","value-9"]]',
  );
});

test("keys() returns entries after remove: multiple", () => {
  const myLL = new ll();

  // New nodes. Length will be 10
  for (let i = 9; i >= 0; i--) {
    myLL.add(`key-${i}`, `value-${i}`);
  }

  // remove some entries
  myLL.remove("key-6");
  myLL.remove("key-4");

  const listEntries = myLL.entries();

  // Ensure that every value added to the list is still in the list
  expect(JSON.stringify(listEntries)).toBe(
    '[["key-0","value-0"],["key-1","value-1"],["key-2","value-2"],["key-3","value-3"],["key-5","value-5"],["key-7","value-7"],["key-8","value-8"],["key-9","value-9"]]',
  );
});

test("keys() returns entries after update and remove: multiple", () => {
  const myLL = new ll();

  // New nodes. Length will be 10
  for (let i = 9; i >= 0; i--) {
    myLL.add(`key-${i}`, `value-${i}`);
  }

  // remove some keys
  myLL.remove("key-6");
  myLL.remove("key-4");

  // Update a key
  myLL.add("key-0", "new-value");

  const listEntries = myLL.entries();

  // Ensure that every value added to the list is still in the list
  expect(JSON.stringify(listEntries)).toBe(
    '[["key-0","new-value"],["key-1","value-1"],["key-2","value-2"],["key-3","value-3"],["key-5","value-5"],["key-7","value-7"],["key-8","value-8"],["key-9","value-9"]]',
  );
});
