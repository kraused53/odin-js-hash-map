const cssContext = require.context("../css", true, /\.css$/);
cssContext.keys().forEach(cssContext);

const HashMap = require("./hash-map/hash-map");
const HashSet = require("./hash-set/hash-set");

const test = new HashMap();
const testSet = new HashSet();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

console.log(`Initial data set: \n${test.toString()}`);

test.set("hat", "pitch black");
test.set("ice cream", "stark white");
test.set("jacket", "deeper blue");

console.log(
  `Calling set on existing keys does not change size, only replaces values:\n${test.toString()}`,
);

test.set("moon", "silver");
console.log(
  `Adding an entry that causes size to exceed the load factor will cause a refactor. The capacity is doubled and the entries are redistributed amongst the new buckets:\n${test.toString()}`,
);

console.log("Set testing...");

testSet.set("apple");
testSet.set("banana");
testSet.set("carrot");
testSet.set("dog");
testSet.set("elephant");
testSet.set("frog");
testSet.set("grape");
testSet.set("hat");
testSet.set("ice cream");
testSet.set("jacket");
testSet.set("kite");
testSet.set("lion");

console.log(`Initial data set: \n${testSet.toString()}`);

testSet.set("moon");
console.log(
  `Adding an entry that causes set size to exceed the load factor will cause a refactor. The capacity is doubled and the entries are redistributed amongst the new buckets:\n${testSet.toString()}`,
);
