let moves = 0;

function hanoiSolver(diskCount, startRod, targetRod, auxRod) {
  if (diskCount === 1) {
    console.log(`Move disk 1 from ${startRod} to ${targetRod}`);
    moves++;
    return;
  }
  hanoiSolver(diskCount - 1, startRod, auxRod, targetRod);
  console.log(`Move disk ${diskCount} from ${startRod} to ${targetRod}`);
  hanoiSolver(diskCount - 1, auxRod, targetRod, startRod);
  moves++;
}

hanoiSolver(3, "A", "C", "B");
console.log(`Total Moves: ${moves}`);