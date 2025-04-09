function reverseArray(arr) {
    const newArray = [];

    for(element of arr) {
        newArray.unshift(element);
    }

    console.log(newArray)
}

reverseArray([1, 2, 3, 4]);      // Output: [4, 3, 2, 1]
reverseArray(['a', 'b', 'c']);   // Output: ['c', 'b', 'a']