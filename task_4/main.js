function countOccurrences(arr, value) {
    let result = arr.filter(item => item === value).length;

    console.log(result);
}

countOccurrences([1, 2, 2, 3, 2, 4], 2);   // Output: 3
countOccurrences(['a', 'b', 'a', 'c'], 'a'); // Output: 2