const hm = require("../../hash-map/hash-map");

test("New hash map.size: 0", () => {
  const myHM = new hm();
  expect(myHM.size).toBe(0);
});

test("New hash map.load_factor: 0.75", () => {
  const myHM = new hm();
  expect(myHM.load_factor).toBe(0.75);
});

test("New hash map.capacity: 16", () => {
  const myHM = new hm();
  expect(myHM.capacity).toBe(16);
});

test("New hash map all buckets start empty", () => {
  const myHM = new hm();

  myHM.buckets.forEach((bucket) => {
    expect(bucket.isEmpty()).toBe(true);
  });
});

test("New hash map there should be 16 buckets", () => {
  const myHM = new hm();

  expect(myHM.buckets.length).toBe(16);
});
