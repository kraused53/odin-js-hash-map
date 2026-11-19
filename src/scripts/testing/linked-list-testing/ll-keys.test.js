const ll = require("../../linked-list/linked-list");

// Empty list
test("keys() returns [] on empty list", () => {
  const myLL = new ll();

  expect(myLL.keys()).toStrictEqual([]);
});

// Single Items
test("keys() returns key: single", () => {
  const myLL = new ll();

  myLL.add("key", "value");

  expect(myLL.keys()).toStrictEqual(["key"]);
});

test("keys() returns key after update: single", () => {
  const myLL = new ll();

  myLL.add("key", "value");
  myLL.add("key", "new-value");

  expect(myLL.keys()).toStrictEqual(["key"]);
});

test("keys() returns [] after all remove: single", () => {
  const myLL = new ll();

  myLL.add("key", "value");
  myLL.remove("key");

  expect(myLL.keys()).toStrictEqual([]);
});

test("keys() returns [] after update and remove: single", () => {
  const myLL = new ll();

  myLL.add("key", "value");
  myLL.add("key", "new-value");
  myLL.remove("key");

  expect(myLL.keys()).toStrictEqual([]);
});

// Multiple Items
test("keys() returns key: multiple", () => {
  const myLL = new ll();

  const keys = [];
  // New nodes. Length will be 10
  for (let i = 0; i < 10; i++) {
    keys.push(`key-${i}`);
    myLL.add(`key-${i}`, `value-${i}`);
  }

  const listKeys = myLL.keys();

  // Ensure that every key added to the list is still in the list
  keys.forEach((key) => {
    expect(listKeys.includes(key)).toStrictEqual(true);
  });
});

test("keys() returns key after update: multiple", () => {
  const myLL = new ll();

  const keys = [];
  // New nodes. Length will be 10
  for (let i = 0; i < 10; i++) {
    keys.push(`key-${i}`);
    myLL.add(`key-${i}`, `value-${i}`);
  }

  // Update a key
  myLL.add("key-6", "new-value");

  const listKeys = myLL.keys();

  // Ensure that every key added to the list is still in the list
  keys.forEach((key) => {
    expect(listKeys.includes(key)).toStrictEqual(true);
  });
});

test("keys() returns [] after remove: multiple", () => {
  const myLL = new ll();

  let keys = [];
  // New nodes. Length will be 10
  for (let i = 0; i < 10; i++) {
    keys.push(`key-${i}`);
    myLL.add(`key-${i}`, `value-${i}`);
  }

  // remove some keys
  myLL.remove("key-6");
  keys = keys.filter((item) => item !== "key-6");
  myLL.remove("key-4");
  keys = keys.filter((item) => item !== "key-4");

  const listKeys = myLL.keys();

  // Ensure that every key added to the list is still in the list
  keys.forEach((key) => {
    expect(listKeys.includes(key)).toStrictEqual(true);
  });
});

test("keys() returns [] after update and remove: multiple", () => {
  const myLL = new ll();

  let keys = [];
  // New nodes. Length will be 10
  for (let i = 0; i < 10; i++) {
    keys.push(`key-${i}`);
    myLL.add(`key-${i}`, `value-${i}`);
  }

  // remove some keys
  myLL.remove("key-6");
  keys = keys.filter((item) => item !== "key-6");
  myLL.remove("key-4");
  keys = keys.filter((item) => item !== "key-4");

  // Update a key
  myLL.add("key-0", "new-value");

  const listKeys = myLL.keys();

  // Ensure that every key added to the list is still in the list
  keys.forEach((key) => {
    expect(listKeys.includes(key)).toStrictEqual(true);
  });
});
