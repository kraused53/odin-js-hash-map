const HashMap = require("../hash-map/hash-map");
const ll = require("../linked-list/linked-list");

class HashSet extends HashMap {
  constructor() {
    super();
  }

  // Add a key to the map
  add(key) {
    super.set(key, null);
  }

  // Remove a key from the map
  remove(key) {
    super.remove(key);
  }

  // Return true if the given key is in the map
  has(key) {
    return super.has(key);
  }

  // Return an array of each key currently in the map
  keys() {
    return super.keys();
  }

  // Return the size of the map
  length() {
    return super.length();
  }

  // Debug only
  // Return a string representation of the current contents of the linked list
  toString() {
    const result = [];

    result.push(
      `Set current capacity ${this.size / this.capacity} [ ${this.size} / ${this.capacity} ]}\n`,
    );

    result.push(`Set current keys:\n[\n`);

    this.buckets.forEach((bucket) => {
      const bucketKeys = bucket.keys();

      if (bucketKeys.length === 0) {
        result.push(`  [ empty ]\n`);
      } else {
        result.push(`  [ ${bucketKeys} ]\n`);
      }
    });

    result.push(`]`);

    return result.join("");
  }
}

// Export for Jest testing
module.exports = HashSet;
