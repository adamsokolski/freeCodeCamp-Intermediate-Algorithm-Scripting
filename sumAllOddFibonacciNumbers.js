// Returns the sum of all odd Fibonacci numbers that are less than or equal to num
function sumFibs(num) {
    let fibonacciArr = fibonacci(num)
    let oddFibonacciArr = fibonacciArr.filter(x => x % 2 === 1)
    let sum = oddFibonacciArr.reduce((a, b) => a + b, 0)
    return sum;
  }
  
  // Returns array containing Fibonacci sequence that last element is less than or equal to num
  function fibonacci(num) {
    let j = 1
    let sum = 0
    let arr = [1,1]
    while (sum <= num) {
      sum = arr[j-1] + arr[j]
      j++
      if (sum <= num) {
        arr.push(sum)
      }
    }
    return arr
  } 
  