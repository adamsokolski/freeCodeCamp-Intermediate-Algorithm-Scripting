// Sum of all prime numbers less than or equal to num
function sumPrimes(num) {
    let arr = []
    for (let i = 1; i <= num; i++) {
      if (isPrime(i)) {
        arr.push(i)
      }
    }
    let sum = arr.reduce((a,b) => a + b, 0)
    return sum;
  }
  
  // Check if num is prime number (has two divisors)
  function isPrime(num) {
    let divisors = 0
    let numIsPrime
    
    // Check how many divisors num have
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        divisors++
      }
    }
  
    if (divisors === 2) {
      numIsPrime = true
    } else {
      numIsPrime = false
    }
    
    return numIsPrime
  }
