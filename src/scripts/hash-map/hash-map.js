const ll = require("../linked-list/linked-list");

class HashMap {
  constructor() {
    this.capacity = 16;
    this.load_factor = 0.75;
    this.size = 0;

    this.buckets = Array.from({ length: this.capacity }, () => new ll());
  }

  // Add a key value pair to the map. If the key already exists, update the value
  set(key, value) {
    const index = this.hash(key);

    // Add the pair to the right bucket.
    const newPairAdded = this.buckets[index].add(key, value);

    // If a new pair was added, not an update action, increment the size
    if (newPairAdded) {
      this.size += 1;
    }

    // Check if a refactor is needed
    if (this.isOverloaded()) {
      this.refactor();
    }
  }

  // Take a key and return the paired value. return undefined for non-existent keys
  get(key) {
    // Nothing to do if list is empty
    if (this.size === 0) {
      return undefined;
    }

    // Get hash index
    const index = this.hash(key);

    // Fetch the key. In case of missing key, pass along undefined from bucket
    return this.buckets[index].get(key);
  }

  // Remove a key from the map
  remove(key) {
    // Nothing to do if list is empty
    if (this.size === 0) {
      return;
    }

    // Get hash index
    const index = this.hash(key);

    const kvpWasRemoved = this.buckets[index].remove(key);

    // If a node was removed, reduce the size of the map
    if (kvpWasRemoved) {
      this.size -= 1;
    }
  }

  // Return true if the given key is in the map
  has(key) {
    if (this.size === 0) {
      return false;
    }
    // Get hash index
    const index = this.hash(key);

    // Fetch the key. In case of missing key, pass along undefined from bucket
    return this.buckets[index].has(key);
  }

  // Double the capacity, clear the size, and re-hash all entries
  refactor() {
    // Get an array containing each key / value pair in the map
    const currentEntries = this.entries();

    // Double the current capacity
    this.capacity *= 2;

    // Clear current size
    this.size = 0;

    // Make new buckets array to fit the expanded size
    this.buckets = Array.from({ length: this.capacity }, () => new ll());

    // For each entry in the entries array
    currentEntries.forEach((entry) => {
      // Place the entry back in the map, redistributing them inside the new map space
      this.set(entry[0], entry[1]);
    });
  }

  // Return an array of each entry currently in the map
  entries() {
    // Array to store key value pairs
    const kvp = [];

    // For each bucket in the current buckets array
    this.buckets.forEach((bucket) => {
      // Get an array of each entry in that bucket
      const bucket_kvp = bucket.entries();

      // For each of those entries, push them to the kvp array
      bucket_kvp.forEach((entry) => {
        kvp.push(entry);
      });
    });

    return kvp;
  }

  // Return an array of each key currently in the map
  keys() {
    // Array to store key value pairs
    const keys = [];

    // For each bucket in the current buckets array
    this.buckets.forEach((bucket) => {
      if (!bucket.isEmpty()) {
        // Get an array of each entry in that bucket
        const bucket_keys = bucket.keys();

        // For each of those entries, push them to the kvp array
        bucket_keys.forEach((key) => {
          keys.push(key);
        });
      }
    });

    return keys;
  }

  // Return an array of each key currently in the map
  values() {
    // Array to store key value pairs
    const values = [];

    // For each bucket in the current buckets array
    this.buckets.forEach((bucket) => {
      if (!bucket.isEmpty()) {
        // Get an array of each entry in that bucket
        const bucket_keys = bucket.values();

        // For each of those entries, push them to the kvp array
        bucket_keys.forEach((value) => {
          values.push(value);
        });
      }
    });

    return values;
  }

  // Return the size of the map
  length() {
    return this.size;
  }

  // Take a string and produce a hash that is within the current bounds of the map buckets
  hash(key) {
    if (key === null) {
      throw new TypeError("hash(): key can not be null!");
    } else if (typeof key !== "string") {
      throw new TypeError("hash(): key must be a string!");
    } else if (key.trim() === "") {
      throw new TypeError("hash(): key can not be empty!");
    }

    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode % this.capacity;
  }

  // Return true if the current size exceeds the current load capacity
  isOverloaded() {
    // capacity * load_factor = maxSize before refactor
    // Overloaded if size > maxSize
    return this.size > this.capacity * this.load_factor;
  }

  // Debug only
  // Return a string representation of the current contents of the linked list
  toString() {
    const result = [];

    result.push(
      `Map current capacity ${this.size / this.capacity} [ ${this.size} / ${this.capacity} ]}\n`,
    );

    result.push(`Map current entries:\n[\n`);

    this.buckets.forEach((bucket) => {
      result.push(`  [ ${bucket.toString()} ]\n`);
    });

    result.push(`]`);

    return result.join("");
  }
}

// Export for Jest testing
module.exports = HashMap;
