def isPrime(val: int) -> bool:
     for n in range(2, val):
         if val % n == 0:
             return False
     return True


def primeSequence(N=1000):
 if N < 2:
     # Empty list since the fist prime number is 2
     return []
 elif N >= 2:
     primes = []

     # Calculate primes using nested for loops
     for val in range(2, N + 1):
         # for each value, check if it's a valid prime
         if isPrime(val):
             primes.append(val)
     return primes


# Print prime numbers
print(primeSequence(5000))
