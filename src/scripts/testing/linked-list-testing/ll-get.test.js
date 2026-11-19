const ll = require("../../linked-list/linked-list");

// Empty list
test("get() returns undefined on empty list", () => {
  const myLL = new ll();

  expect(myLL.get("key")).toBe(undefined);
});

// Single items
test("get() returns correct value for key", () => {
  const myLL = new ll();

  myLL.add("key", "value");

  expect(myLL.get("key")).toBe("value");
});

test("get() returns correct value for key. Works after update", () => {
  const myLL = new ll();

  myLL.add("key", "value");
  myLL.add("key", "new-value");

  expect(myLL.get("key")).toBe("new-value");
});

test("get() returns undefined value for missing key", () => {
  const myLL = new ll();

  myLL.add("key", "value");

  expect(myLL.get("not-a-key")).toBe(undefined);
});

test("get() returns undefined value for missing key. Works after update", () => {
  const myLL = new ll();

  myLL.add("key", "value");
  myLL.add("key", "new-value");

  expect(myLL.get("not-a-key")).toBe(undefined);
});

test("get() returns undefined value for missing key. Works after remove", () => {
  const myLL = new ll();

  myLL.add("key", "value");
  myLL.remove("key");

  expect(myLL.get("key")).toBe(undefined);
});

// Multiple items items
test("has() returns true if key is in list", () => {
  const myLL = new ll();

  // New nodes. Length will be 10
  for (let i = 0; i < 10; i++) {
    myLL.add(`key-${i}`, `value-${i}`);
  }

  // All items added should be found
  for (let i = 0; i < 10; i++) {
    expect(myLL.get(`key-${i}`)).toBe(`value-${i}`);
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
    expect(myLL.get(`key-${i}`)).toBe(`new-value-${i}`);
  }
});

test("has() returns true if key is in list. Works after remove", () => {
  const myLL = new ll();

  // New nodes. Length will be 10
  for (let i = 0; i < 10; i++) {
    myLL.add(`key-${i}`, `value-${i}`);
  }

  // 10 remove nodes. length will be 0
  for (let i = 0; i < 10; i++) {
    myLL.remove(`key-${i}`);
  }

  // All items removed should be undefined
  for (let i = 0; i < 10; i++) {
    expect(myLL.get(`key-${i}`)).toBe(undefined);
  }
});
