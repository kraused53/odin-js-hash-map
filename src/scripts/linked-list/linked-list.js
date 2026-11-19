class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.currentSize = 0;
  }

  // Add or change a key/value pair
  add(key, value) {
    let move = this.head;

    while (move !== null) {
      // Check this node
      if (move.key === key) {
        // Found, update it
        move.value = value;

        // Did not add a new node, return false
        return false;
      }

      // Advance move
      move = move.next;
    }

    // Did not find node, make a new one
    const toAdd = new Node(key, value);

    // Link node to rest of list
    toAdd.next = this.head;

    // Move head to new node
    this.head = toAdd;

    // Increment size
    this.currentSize += 1;

    // Added a new node, return true
    return true;
  }

  // Attempt to remove a key from the list. return true if found
  remove(key) {
    if (this.isEmpty()) {
      return false;
    }

    // Check if head is node to remove
    if (this.head.key === key) {
      // Make reference to head
      let toRemove = this.head;

      // Advance head
      this.head = this.head.next;

      // Unlink and null toRemove
      toRemove.next = null;
      toRemove = null;

      // Decrement size
      this.currentSize -= 1;

      return true;
    } else {
      // Lets fond the node
      let move = this.head;

      while (move !== null && move.next !== null) {
        // See if the next node is the one to remove
        if (move.next.key === key) {
          // Make reference to node
          let toRemove = move.next;

          // Have move bypass to remove
          move.next = toRemove.next;

          // Unlink and null toRemove
          toRemove.next = null;
          toRemove = null;

          // Decrement size
          this.currentSize -= 1;

          return true;
        }

        // Advance move
        move = move.next;
      }
    }

    // Not found
    return false;
  }

  // Remove all nodes from the linked list
  clear() {
    // Unlink head from old memory. This will cause the javascript garbage collector to free the unused nodes as soon as this function goes out of scope
    this.head = null;

    // Set size to zero
    this.currentSize = 0;
  }

  // Fetch a value from the list by its key
  get(key) {
    // Return undefined on an empty list
    if (this.isEmpty()) {
      return undefined;
    }

    let move = this.head;

    while (move !== null) {
      if (move.key === key) {
        return move.value;
      }
      // Advance move
      move = move.next;
    }

    return undefined;
  }

  // Return an array of the keys in the list
  keys() {
    let move = this.head;
    const foundKeys = [];

    while (move !== null) {
      // Add the key inside move to the array
      foundKeys.push(move.key);

      // Advance move
      move = move.next;
    }

    return foundKeys;
  }

  // Return an array of the values in the list
  values() {
    let move = this.head;
    const foundValues = [];

    while (move !== null) {
      // Add the key inside move to the array
      foundValues.push(move.value);

      // Advance move
      move = move.next;
    }

    return foundValues;
  }

  // Return an array of the key/value pairs in the list
  entries() {
    let move = this.head;
    const foundPairs = [];

    while (move !== null) {
      // Add the key inside move to the array
      foundPairs.push([move.key, move.value]);

      // Advance move
      move = move.next;
    }

    return foundPairs;
  }

  // Returns true if the given key is in the list. Otherwise, return false
  has(key) {
    if (this.isEmpty()) {
      return false;
    }

    let move = this.head;

    while (move !== null) {
      // Check this node
      if (move.key === key) {
        // Found
        return true;
      }

      // Advance move
      move = move.next;
    }

    // Did not find
    return false;
  }

  // Return the current number of nodes in the list
  length() {
    return this.currentSize;
  }

  // Utility: returns true if size is zero or head is null
  isEmpty() {
    return this.currentSize === 0 || this.head === null;
  }

  // Return a string representation of the current contents of the linked list
  toString() {
    let current = this.head;
    const result = [];

    while (current) {
      result.push(`( ${current.key}, ${current.value} )`);
      result.push("->");
      current = current.next;
    }

    result.push("null");

    return result.join(" ");
  }
}

module.exports = LinkedList;
