let moveCount = 0;

function towerOfHanoi(disk, fromRod, toRod, usingRod) {
  if (disk === 1) {
    console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
    moveCount++;
    return;
  }
  towerOfHanoi(disk - 1, fromRod, usingRod, toRod);
  console.log(`Move disk ${disk} from ${fromRod} to ${toRod}`);
  towerOfHanoi(disk - 1, usingRod, toRod, fromRod);
  moveCount++;
}

towerOfHanoi(3, "A", "C", "B");
console.log(`Total Amount of Move ${moveCount}`);
