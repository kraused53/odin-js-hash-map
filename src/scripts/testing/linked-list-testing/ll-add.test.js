const ll = require("../../linked-list/linked-list");

/// Single item tests ///
test("Adding new item increases length", () => {
  const myLL = new ll();

  myLL.add("key", "value");

  expect(myLL.length()).toBe(1);
});

test("Adding repeat items does not increase length", () => {
  const myLL = new ll();

  myLL.add("key", "value");
  myLL.add("key", "new-value");

  expect(myLL.length()).toBe(1);
});

test("Adding new item adds it to head of list", () => {
  const myLL = new ll();

  myLL.add("key", "value");

  expect(myLL.toString()).toBe("( key, value ) -> null");
});

test("Adding repeat item updates item without changing it's position", () => {
  const myLL = new ll();

  myLL.add("key", "value");
  myLL.add("key", "new-value");

  expect(myLL.toString()).toBe("( key, new-value ) -> null");
});

/// Multiple item tests ///
test("Adding multiple new items increases length for each new node", () => {
  const myLL = new ll();

  // New nodes. Length will be 10
  for (let i = 0; i < 10; i++) {
    myLL.add(`key-${i}`, `value-${i}`);
  }

  expect(myLL.length()).toBe(10);
});

test("Adding multiple repeat items does not increase length for each repeat node", () => {
  const myLL = new ll();

  // New nodes. Length will be 10
  for (let i = 0; i < 10; i++) {
    myLL.add(`key-${i}`, `value-${i}`);
  }

  // 10 Repeat nodes. length will still be 10
  for (let i = 0; i < 10; i++) {
    myLL.add(`key-${i}`, `new-value-${i}`);
  }

  expect(myLL.length()).toBe(10);
});

test("Adding multiple new items adds them to head of list", () => {
  const myLL = new ll();

  // New nodes. Length will be 10
  for (let i = 0; i < 10; i++) {
    myLL.add(`key-${i}`, `value-${i}`);
  }

  expect(myLL.toString()).toBe(
    "( key-9, value-9 ) -> ( key-8, value-8 ) -> ( key-7, value-7 ) -> ( key-6, value-6 ) -> ( key-5, value-5 ) -> ( key-4, value-4 ) -> ( key-3, value-3 ) -> ( key-2, value-2 ) -> ( key-1, value-1 ) -> ( key-0, value-0 ) -> null",
  );
});

test("Adding repeat items updates them without changing their order", () => {
  const myLL = new ll();

  // New nodes. Length will be 10
  for (let i = 0; i < 10; i++) {
    myLL.add(`key-${i}`, `value-${i}`);
  }

  myLL.add("key-2", "value was changed");
  myLL.add("key-5", "value was changed");
  myLL.add("key-1", "value was changed");

  expect(myLL.toString()).toBe(
    "( key-9, value-9 ) -> ( key-8, value-8 ) -> ( key-7, value-7 ) -> ( key-6, value-6 ) -> ( key-5, value was changed ) -> ( key-4, value-4 ) -> ( key-3, value-3 ) -> ( key-2, value was changed ) -> ( key-1, value was changed ) -> ( key-0, value-0 ) -> null",
  );
});
