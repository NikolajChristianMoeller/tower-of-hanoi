import { TowerStack } from "./stack.js";

const towerA = document.querySelector("#tower1");
const towerB = document.querySelector("#tower2");
const towerC = document.querySelector("#tower3");

let disk1 = document.querySelector("#disk1");
let disk2 = document.querySelector("#disk2");
let disk3 = document.querySelector("#disk3");
let disk4 = document.querySelector("#disk4");
let disk5 = document.querySelector("#disk5");
let disk6 = document.querySelector("#disk6");
let disk7 = document.querySelector("#disk7");
let disk8 = document.querySelector("#disk8");

let stackA, stackB, stackC;

window.addEventListener("load", initGame);

function initGame() {
  initStacks();
  setupEventListeners();
}

function setupEventListeners() {
  towerA.addEventListener("click", handleTowerClick);
  towerB.addEventListener("click", handleTowerClick);
  towerC.addEventListener("click", handleTowerClick);
}

function handleTowerClick(event) {
  const towerId = event.target.getAttribute("data-value");
  let selectedStack;

  switch (towerId) {
    case "1":
      selectedStack = stackA;
      break;
    case "2":
      selectedStack = stackB;
      break;
    case "3":
      selectedStack = stackC;
      break;
    default:
      return;
  }

  console.log("Tower Clicked:", towerId, "Stack:", selectedStack);
}

function toggleDiskMove(event) {
  const disk = event.target;
  const isLifted = disk.getAttribute("data-is-lifted") === "true";

  if (isLifted) {
    lowerDisk(disk);
  } else {
    liftDisk(disk);
  }

  disk.setAttribute("data-is-lifted", !isLifted);
}

function liftDisk(disk) {
  console.log("Lifting Disk:", disk);
  disk.style.animation = "lift 0.5s forwards";
}

function lowerDisk(disk) {
  console.log("Lowering Disk:", disk);
  disk.style.animation = "drop 0.5s forwards";
}

function initStacks() {
  stackA = new TowerStack();
  stackB = new TowerStack();
  stackC = new TowerStack();

  stackA.addDisk(disk8);
  stackA.addDisk(disk7);
  stackA.addDisk(disk6);
  stackA.addDisk(disk5);
  stackA.addDisk(disk4);
  stackA.addDisk(disk3);
  stackA.addDisk(disk2);
  stackA.addDisk(disk1);

  console.log(stackA);
}
