export function findOutlier(integers: number[]): number {
  let evenCount = 0;
  let lookForEven = false;

  // go through the first three items to see if we should look for even or odd
  for (let integer of integers.slice(0, 3)) {
    if (integer % 2 === 0) {
      evenCount += 1;
    }
  }

  // set what the outlier would be depending on the number of even numebrs in the first three items
  if (evenCount >= 2) {
    lookForEven = false;
  } else {
    lookForEven = true;
  }

  // find the outlier
  for (let integer of integers) {
    if (integer % 2 === 0 && lookForEven) {
      return integer;
    } else if (integer % 2 !== 0 && !lookForEven) {
      return integer;
    }
  }
  return 0;
}
