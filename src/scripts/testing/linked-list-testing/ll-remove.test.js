const ll = require("../../linked-list/linked-list");

// Empty list
test("remove() returns false on empty list", () => {
  const myLL = new ll();

  expect(myLL.remove("key")).toBe(false);
});

// Single Items
test("remove() returns true if an item is removed", () => {
  const myLL = new ll();

  myLL.add("key", "value");

  expect(myLL.remove("key")).toBe(true);
});

test("remove() returns false if an item is not found", () => {
  const myLL = new ll();

  myLL.add("key", "value");

  expect(myLL.remove("not-a-key")).toBe(false);
});

test("Double remove() returns true if key exists, false on repeated calls", () => {
  const myLL = new ll();

  myLL.add("key", "value");

  expect(myLL.remove("key")).toBe(true);
  expect(myLL.remove("key")).toBe(false);
});

test("remove() updates length if item is found", () => {
  const myLL = new ll();

  myLL.add("key", "value");
  myLL.remove("key");

  expect(myLL.length()).toBe(0);
});

test("remove() does not update length if item is not found", () => {
  const myLL = new ll();

  myLL.add("key", "value");
  myLL.remove("not-a-key");

  expect(myLL.length()).toBe(1);
});

// Multiple Items
test("remove() will remove item from list without disturbing other nodes", () => {
  const myLL = new ll();

  // New nodes. Length will be 10
  for (let i = 0; i < 10; i++) {
    myLL.add(`key-${i}`, `value-${i}`);
  }

  myLL.remove("key-5");

  // Only one item removed
  expect(myLL.toString()).toBe(
    "( key-9, value-9 ) -> ( key-8, value-8 ) -> ( key-7, value-7 ) -> ( key-6, value-6 ) -> ( key-4, value-4 ) -> ( key-3, value-3 ) -> ( key-2, value-2 ) -> ( key-1, value-1 ) -> ( key-0, value-0 ) -> null",
  );
});

test("remove() returns true if an item is removed", () => {
  const myLL = new ll();

  // New nodes. Length will be 10
  for (let i = 0; i < 10; i++) {
    myLL.add(`key-${i}`, `value-${i}`);
  }

  // Only one item removed
  expect(myLL.remove("key-5")).toBe(true);
});

test("remove() returns false if an item is not found", () => {
  const myLL = new ll();

  // New nodes. Length will be 10
  for (let i = 0; i < 10; i++) {
    myLL.add(`key-${i}`, `value-${i}`);
  }

  // key-50 does not exist, remove should return false
  expect(myLL.remove("key-50")).toBe(false);
});

test("Double remove() returns true if key exists, false on repeated calls", () => {
  const myLL = new ll();

  // New nodes. Length will be 10
  for (let i = 0; i < 10; i++) {
    myLL.add(`key-${i}`, `value-${i}`);
  }

  expect(myLL.remove("key-5")).toBe(true);
  expect(myLL.remove("key-5")).toBe(false);
});

test("remove() updates length if item is found", () => {
  const myLL = new ll();

  // New nodes. Length will be 10
  for (let i = 0; i < 10; i++) {
    myLL.add(`key-${i}`, `value-${i}`);
  }

  myLL.remove("key-1");

  expect(myLL.length()).toBe(9);
});

test("remove() does not update length if item is not found", () => {
  const myLL = new ll();

  // New nodes. Length will be 10
  for (let i = 0; i < 10; i++) {
    myLL.add(`key-${i}`, `value-${i}`);
  }

  myLL.remove("not-a-key-1");

  expect(myLL.length()).toBe(10);
});
