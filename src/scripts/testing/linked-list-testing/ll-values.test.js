const ll = require("../../linked-list/linked-list");

// Empty list
test("values() returns [] on empty list", () => {
  const myLL = new ll();

  expect(myLL.values()).toStrictEqual([]);
});

// Single Items
test("values() returns key: single", () => {
  const myLL = new ll();

  myLL.add("key", "value");

  expect(myLL.values()).toStrictEqual(["value"]);
});

test("values() returns new key after update: single", () => {
  const myLL = new ll();

  myLL.add("key", "value");
  myLL.add("key", "new-value");

  expect(myLL.values()).toStrictEqual(["new-value"]);
});

test("values() returns [] after all remove: single", () => {
  const myLL = new ll();

  myLL.add("key", "value");
  myLL.remove("key");

  expect(myLL.values()).toStrictEqual([]);
});

test("values() returns [] after update and remove: single", () => {
  const myLL = new ll();

  myLL.add("key", "value");
  myLL.add("key", "new-value");
  myLL.remove("key");

  expect(myLL.values()).toStrictEqual([]);
});

// Multiple Items
test("values() returns values: multiple", () => {
  const myLL = new ll();

  let values = [];
  // New nodes. Length will be 10
  for (let i = 0; i < 10; i++) {
    values.push(`value-${i}`);
    myLL.add(`key-${i}`, `value-${i}`);
  }

  const listValues = myLL.values();

  // Ensure that every value added to the list is still in the list
  values.forEach((value) => {
    expect(listValues.includes(value)).toStrictEqual(true);
  });
});

test("values() returns values after update: multiple", () => {
  const myLL = new ll();

  let values = [];
  // New nodes. Length will be 10
  for (let i = 0; i < 10; i++) {
    values.push(`value-${i}`);
    myLL.add(`key-${i}`, `value-${i}`);
  }

  // Update some values
  myLL.add("key-6", "new-value");
  values = values.filter((item) => item !== "value-6");
  values.push("new-value");

  myLL.add("key-4", "new-value");
  values = values.filter((item) => item !== "value-4");
  values.push("new-value");

  const listValues = myLL.values();

  // Ensure that every value added to the list is still in the list
  values.forEach((value) => {
    expect(listValues.includes(value)).toBe(true);
  });
});

test("values() returns values after remove: multiple", () => {
  const myLL = new ll();

  let values = [];
  // New nodes. Length will be 10
  for (let i = 0; i < 10; i++) {
    values.push(`value-${i}`);
    myLL.add(`key-${i}`, `value-${i}`);
  }

  // remove some values
  myLL.remove("key-6");
  values = values.filter((item) => item !== "value-6");

  myLL.remove("key-4");
  values = values.filter((item) => item !== "value-4");

  const listValues = myLL.values();

  // Ensure that every value added to the list is still in the list
  values.forEach((value) => {
    expect(listValues.includes(value)).toBe(true);
  });
});

test("values() returns values after update and remove: multiple", () => {
  const myLL = new ll();

  let values = [];
  // New nodes. Length will be 10
  for (let i = 0; i < 10; i++) {
    values.push(`value-${i}`);
    myLL.add(`key-${i}`, `value-${i}`);
  }

  // remove some keys
  myLL.remove("key-6");
  values = values.filter((item) => item !== "value-6");
  myLL.remove("key-4");
  values = values.filter((item) => item !== "value-4");

  // Update a key
  myLL.add("value-0", "new-value");

  const listValues = myLL.values();

  // Ensure that every value added to the list is still in the list
  values.forEach((value) => {
    expect(listValues.includes(value)).toStrictEqual(true);
  });
});
