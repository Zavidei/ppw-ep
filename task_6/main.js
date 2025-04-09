function mergeObjects(obj1, obj2) {
    console.log({ ...obj1, ...obj2});
}

mergeObjects({a: 1, b: 2}, {b: 3, c: 4});  
// Output: { a: 1, b: 3, c: 4 }
