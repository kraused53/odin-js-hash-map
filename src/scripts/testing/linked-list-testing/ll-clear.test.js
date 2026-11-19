const ll = require("../../linked-list/linked-list");

// Empty list
test("clear() does not cause error on empty list", () => {
  const myLL = new ll();

  myLL.clear();
});

// Single Items
test("clear() sets size to zero", () => {
  const myLL = new ll();

  myLL.add("key", "value");

  myLL.clear();

  expect(myLL.length()).toBe(0);
});

test("clear() sets size to zero, after update", () => {
  const myLL = new ll();

  myLL.add("key", "value");
  myLL.add("key", "new-value");

  myLL.clear();

  expect(myLL.length()).toBe(0);
});

test("clear() makes head null", () => {
  const myLL = new ll();

  myLL.add("key", "value");

  myLL.clear();

  expect(myLL.head).toBe(null);
});

test("clear() makes head null, after update", () => {
  const myLL = new ll();

  myLL.add("key", "value");
  myLL.add("key", "new-value");

  myLL.clear();

  expect(myLL.head).toBe(null);
});

test("clear() clears list", () => {
  const myLL = new ll();

  myLL.add("key", "value");

  myLL.clear();

  expect(myLL.toString()).toBe("null");
});

test("clear() clears, after update", () => {
  const myLL = new ll();

  myLL.add("key", "value");
  myLL.add("key", "new-value");

  myLL.clear();

  expect(myLL.toString()).toBe("null");
});

test("clear() clears, after remove", () => {
  const myLL = new ll();

  myLL.add("key", "value");
  myLL.remove("key");

  myLL.clear();

  expect(myLL.toString()).toBe("null");
});

test("clear() makes head null, after remove", () => {
  const myLL = new ll();

  myLL.add("key", "value");
  myLL.remove("key");

  myLL.clear();

  expect(myLL.head).toBe(null);
});

test("clear() sets size to zero, after remove", () => {
  const myLL = new ll();

  myLL.add("key", "value");
  myLL.remove("key");

  myLL.clear();

  expect(myLL.length()).toBe(0);
});

// Multiple Items
test("clear() sets size to zero", () => {
  const myLL = new ll();

  // New nodes. Length will be 10
  for (let i = 0; i < 10; i++) {
    myLL.add(`key-${i}`, `value-${i}`);
  }

  myLL.clear();

  expect(myLL.length()).toBe(0);
});

test("clear() sets size to zero, after update", () => {
  const myLL = new ll();

  // New nodes. Length will be 10
  for (let i = 0; i < 10; i++) {
    myLL.add(`key-${i}`, `value-${i}`);
  }

  myLL.add("key-1", "new-value");

  myLL.clear();

  expect(myLL.length()).toBe(0);
});

test("clear() makes head null", () => {
  const myLL = new ll();

  // New nodes. Length will be 10
  for (let i = 0; i < 10; i++) {
    myLL.add(`key-${i}`, `value-${i}`);
  }

  myLL.clear();

  expect(myLL.head).toBe(null);
});

test("clear() makes head null, after update", () => {
  const myLL = new ll();

  // New nodes. Length will be 10
  for (let i = 0; i < 10; i++) {
    myLL.add(`key-${i}`, `value-${i}`);
  }

  myLL.add("key-1", "new-value");

  myLL.clear();

  expect(myLL.head).toBe(null);
});

test("clear() clears list", () => {
  const myLL = new ll();

  // New nodes. Length will be 10
  for (let i = 0; i < 10; i++) {
    myLL.add(`key-${i}`, `value-${i}`);
  }

  myLL.clear();

  expect(myLL.toString()).toBe("null");
});

test("clear() clears, after update", () => {
  const myLL = new ll();

  // New nodes. Length will be 10
  for (let i = 0; i < 10; i++) {
    myLL.add(`key-${i}`, `value-${i}`);
  }

  myLL.add("key-1", "new-value");

  myLL.clear();

  expect(myLL.toString()).toBe("null");
});

test("clear() clears, after remove", () => {
  const myLL = new ll();

  // New nodes. Length will be 10
  for (let i = 0; i < 10; i++) {
    myLL.add(`key-${i}`, `value-${i}`);
  }
  myLL.remove("key-1");

  myLL.clear();

  expect(myLL.toString()).toBe("null");
});

test("clear() makes head null, after remove", () => {
  const myLL = new ll();

  // New nodes. Length will be 10
  for (let i = 0; i < 10; i++) {
    myLL.add(`key-${i}`, `value-${i}`);
  }
  myLL.remove("key-1");

  myLL.clear();

  expect(myLL.head).toBe(null);
});

test("clear() sets size to zero, after remove", () => {
  const myLL = new ll();

  // New nodes. Length will be 10
  for (let i = 0; i < 10; i++) {
    myLL.add(`key-${i}`, `value-${i}`);
  }
  myLL.remove("key-1");

  myLL.clear();

  expect(myLL.length()).toBe(0);
});
