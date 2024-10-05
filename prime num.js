// Find All Prime Numbers in a Range //

function findPrimes(start, end) {
    let primes = [];
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Example usage:
const start = 10;
const end = 50;
console.log(`Prime numbers between ${start} and ${end}: ${findPrimes(start, end).join(', ')}`);
