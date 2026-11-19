const ll = require("../../linked-list/linked-list");

// Empty list
test("has() returns false on empty list", () => {
  const myLL = new ll();

  expect(myLL.has("key")).toBe(false);
});

// Single item
test("has() returns true if key is in list", () => {
  const myLL = new ll();

  myLL.add("key", "value");

  expect(myLL.has("key")).toBe(true);
});

test("has() returns true if key is in list. Works after update", () => {
  const myLL = new ll();

  myLL.add("key", "value");
  myLL.add("key", "new-value");

  expect(myLL.has("key")).toBe(true);
});

test("has() returns false if key is not in list.", () => {
  const myLL = new ll();

  myLL.add("key", "value");

  expect(myLL.has("not-a-key")).toBe(false);
});

test("has() returns false if key is not in list. Works after remove()", () => {
  const myLL = new ll();

  myLL.add("key", "value");
  myLL.remove("key");

  expect(myLL.has("key")).toBe(false);
});

// Multiple items
test("has() returns true if key is in list", () => {
  const myLL = new ll();

  // New nodes. Length will be 10
  for (let i = 0; i < 10; i++) {
    myLL.add(`key-${i}`, `value-${i}`);
  }

  // All items added should be found
  for (let i = 0; i < 10; i++) {
    expect(myLL.has(`key-${i}`)).toBe(true);
  }
});

test("has() returns true if key is in list. Works after update", () => {
  const myLL = new ll();

  // New nodes. Length will be 10
  for (let i = 0; i < 10; i++) {
    myLL.add(`key-${i}`, `value-${i}`);
  }

  // 10 Repeat nodes. length will still be 10
  for (let i = 0; i < 10; i++) {
    myLL.add(`key-${i}`, `new-value-${i}`);
  }

  // All items added should be found
  for (let i = 0; i < 10; i++) {
    expect(myLL.has(`key-${i}`)).toBe(true);
  }
});

test("has() returns false if key is not in list.", () => {
  const myLL = new ll();

  // New nodes. Length will be 10
  for (let i = 0; i < 10; i++) {
    myLL.add(`key-${i}`, `value-${i}`);
  }

  expect(myLL.has("not-a-key")).toBe(false);
});

test("has() returns false if key is not in list. Works after remove()", () => {
  const myLL = new ll();

  // New nodes. Length will be 10
  for (let i = 0; i < 10; i++) {
    myLL.add(`key-${i}`, `value-${i}`);
  }

  myLL.remove("key-2");

  expect(myLL.has("key-2")).toBe(false);
});
