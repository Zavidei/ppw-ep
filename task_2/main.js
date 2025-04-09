function isPrime(n) {
    for (let i = 2; i <= n / 2; i++) {
        if (n % i === 0) {
            console.log(false);
            return;
        }
    }
    console.log(true)
}

isPrime(7);  // Output: true
isPrime(10); // Output: false
isPrime(2);  // Output: true
