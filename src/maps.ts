let myMap = new Map<string, number>();

// Alternatively, initializing with key-value pairs
let initializedMap = new Map([
    ["key1", 1],
    ["key2", 2],
]);

myMap.set("key1", 1);
myMap.set("key2", 2);

console.log(myMap.get("key1")); // 1

console.log(myMap.has("key1")); // true
console.log(myMap.has("key3")); // false

myMap.forEach((value, key) => {
    console.log(key, value);
});

// Getting an iterator of entries
for (let [key, value] of myMap.entries()) {
    console.log(key, value);
}

// Iterating over keys
for (let key of myMap.keys()) {
    console.log(key);
}

// Iterating over values
for (let value of myMap.values()) {
    console.log(value);
}

let intArray = Array.from (myMap.values()).map(it => it*2).filter(it => it==2)
console.log(intArray)


