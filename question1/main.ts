export function isValidWalk(walk: string[]) {
  let xPos = 0;
  let yPos = 0;

  // simulate the walk
  for (let direction of walk) {
    if (direction === "n") {
      yPos += 1;
    } else if (direction === "s") {
      yPos -= 1;
    } else if (direction === "e") {
      xPos += 1;
    } else {
      xPos -= 1;
    }
  }

  // check if we are at the original position (0,0) and the walk is 10 minutes
  if (xPos === 0 && yPos === 0 && walk.length === 10) {
    return true;
  } else {
    return false;
  }
}
