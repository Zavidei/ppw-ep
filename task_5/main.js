function objectToArray(obj) {
    console.log(Object.entries(obj));
}

objectToArray({name: 'Alice', age: 25});
// Output: [['name', 'Alice'], ['age', 25]]

objectToArray({city: 'New York', country: 'USA'});
// Output: [['city', 'New York'], ['country', 'USA']]