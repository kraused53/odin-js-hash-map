const ll = require("../../linked-list/linked-list");

test("New linked list.size: 0", () => {
  const myLL = new ll();
  expect(myLL.length()).toBe(0);
});

test("New linked list.head: null", () => {
  const myLL = new ll();
  expect(myLL.head).toBe(null);
});

test("New linked list.toString: null", () => {
  const myLL = new ll();
  expect(myLL.toString()).toBe("null");
});
