function hasTargetSum(array, target) {
  const set = new Set();

  for (let num of array) {
    const complement = target - num;

    if (set.has(complement)) {
      return true;
    }

    set.add(num);
  }

  return false;
}

/* 
  Time Complexity: O(n)
  The function iterates through the array once, adding each element to a set and checking if its complement exists in the set.
  The set operations (add and has) have an average time complexity of O(1).
  Therefore, the overall time complexity of the function is O(n).
*/

/* 
  Pseudocode:
  1. Create an empty set called "seen"
  2. Iterate through each element "num" in the input array
    3. Calculate the complement of "num" by subtracting it from the target
    4. Check if the complement exists in the "seen" set
      5. If it does, return true
    6. Add "num" to the "seen" set
  7. If no pair of numbers adds up to the target, return false
*/

/*
  Explanation:
  This function uses a set to keep track of the numbers that have been seen so far.
  It iterates through the array and for each number, it calculates its complement by subtracting it from the target.
  Then, it checks if the complement exists in the set. If it does, it means that there is a pair of numbers that adds up to the target, so the function returns true.
  If no pair of numbers adds up to the target after iterating through the entire array, the function returns false.
  The time complexity of this function is O(n) because it iterates through the array once and performs constant time set operations.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
