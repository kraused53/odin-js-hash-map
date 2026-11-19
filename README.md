# Hash Map

A simple Hash Map system written in JavaScript as part of The Odin Project

## What even is a has map?

A hash map is a data structure that stores data in a key: value pair ( map[key] = value ). There is a good deal of overhead logic needed to make the map operate, but the payoff is a (theoretical) O(1) access time. This means that (if everything works 🤞) adding more items to the map will not greatly alter the time needed to find any single item in the list.

## High level overview

The hash map will allow you to do the following:

1. Add a { key: value } pair to the map
2. See if an item with a given key already exists in the map
3. Fetch a value by giving the map a key
4. Update the value for a key that already exists in the map
5. Delete a { key: value } pair from the map
6. Get some useful debugging information
7. Fetch every { key: value } pair and place it in an array (useful for migrating between maps, or rebalancing a map)

## A peek under the hood

You can think of the map as a series of buckets that you use to sort your data. Think of a drawer in your kitchen. The drawer is your map, and inside that drawer you have a spot for forks, a spot for spoons, and a spot for knives. Each of these spots would be a bucket inside of a map. When you put a utensil in the drawer, you first categorize it: is this a fork, a spoon, or a knife? This is analogous to the way a map hashes a key. This step determines which bucket place the item in.

Since we are working with computers, and not in a kitchen so the hash we will be using is mathematical, and not categorical. I used the example hash on the [page](https://www.theodinproject.com/lessons/javascript-hashmap) fot this project prompt. To make testing easier, I have limited this map to only except keys and values that are strings. You wouldn't want to try and put a shoe inside your kitchen drawer, and I don;t feel like making a better hash that works on different key types.

When you as the map to do anything involving a key, the key is first hashed, telling the map which bucket this key should be found in. You can pass the same key into the hashing function as many times as you like, and it will always point to the same bucket. This is crucial, otherwise you'd never be able to find anything. However! there is absolutely nothing in this (or really any) hash that ensures that two keys won't point to the same bucket. To solve this issue, each of the buckets is made to be a linked list. Now, whenever a new item is added to the a bucket, it is tacked on to the head of the list. Unfortunately this means that once you determine the correct bucket the search becomes O(n) again, meaning you have to check each node in the bucket until you find the one you are looking for. This might seem like a hell of a lot of work just to end up at O(n) access time again, I mean why not just use a linked list from the start?

The answer is that compared to the total number of items in the entire map, the number of items in each bucket should be relatively small. To ensure this, the map implements a rudimentary load-balancing system. To start with there are only 16 buckets in the map, and the load-factor is set to be 0.75 (75% capacity). So, once the number of items in the map exceeds 75% of the number of buckets ( 0.75 \* 16 = 12 items in the map ) the map will be expanded to have double the buckets. When the map is expanded, all of the items in the map are rehashed and placed in new buckets. This should have the result of spreading the { key: value } pairs around, ensuring the the length of any given bucket is low compared to the number of items in the map.

# Bonus

I made a simple HashSet class by extending the HashMap class. HashSet works almost the exact same as HashMap but only works with keys. All references to values have been removed for the HashSet class. A simple example is made in index.js

## Directory Structure

```
src/                -- All webpage files go here.
  ├ *all others*/       -- Not needed for this project.
  └ scripts/            -- All javascript files live here.
    ├ index.js              -- Project entry point
    ├ hash-map/             -- Hash Map class implementation
    ├ linked-list/          -- Linked-List (bucket) class implementation
    └ testing/              -- All jest unit testing files
      ├ hash-map-testing/       -- Hash Map unit testing
      └ linked-list-testing/    -- Linked List unit testing
```

## To setup:

To initialize project for npm development, run these commands

```bash
npm init -y --init-type=module

npm install --save-dev webpack webpack-cli
npm install --save-dev html-webpack-plugin
npm install --save-dev style-loader css-loader
npm install --save-dev html-loader
npm install --save-dev webpack-dev-server
npm install --save-dev jest

npm pkg set scripts.test="jest"
npm pkg set scripts.dev="webpack serve --open --config webpack.dev.js"
```

This will do the following:

- Initialize the local npm system in module mode
  - This creates the package.json file
- Installs the needed npm packages
- Adds npm run ... commands
  - See below

Commands:

This will run the Jest testing suite. It will recursively find all files with the form <-file name->.test.js

```bash
npm run test
```

This will compile your webpage and run a live server that should update as you modify the contents of the page. This runs the src/index.js file, where I have placed a simple example on how to use the system. Once you have it running, open up the developer tools for the webpage and check out the console. Feel free to play around with the contents of src/index.js.

```bash
npm run dev
```
