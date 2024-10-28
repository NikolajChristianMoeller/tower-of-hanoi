import { Stack } from "./stack.js";

const tower1 = document.querySelector("#tower1");
const tower2 = document.querySelector("#tower2");
const tower3 = document.querySelector("#tower3");
let disk1 = document.querySelector("#disk1");
let disk2 = document.querySelector("#disk2");
let disk3 = document.querySelector("#disk3");
let disk4 = document.querySelector("#disk4");
let disk5 = document.querySelector("#disk5");
let disk6 = document.querySelector("#disk6");
let disk7 = document.querySelector("#disk7");
let disk8 = document.querySelector("#disk8");
let stack1, stack2, stack3;

window.addEventListener("load", main);

function main() {
  console.log("Hejsa");
  initStacks();
  towerEventlisners();
  diskEventlisners();
}

function towerEventlisners() {
  tower1.addEventListener("click", towerClickOn);
  tower2.addEventListener("click", towerClickOn);
  tower3.addEventListener("click", towerClickOn);
}

function towerClickOn(event) {
  const towerId = event.target.getAttribute("data-value");
  let stack;

  switch (towerId) {
    case "1":
      stack = stack1;
      break;
    case "2":
      stack = stack2;
      break;
    case "3":
      stack = stack3;
      break;
    default:
      return;
  }

  console.log("Clicked on Tower: ", towerId, "Stack: ", stack);
}

function diskEventlisners() {
  disk1.addEventListener("click", toggleDiskMove);
  disk2.addEventListener("click", toggleDiskMove);
  disk3.addEventListener("click", toggleDiskMove);
  disk4.addEventListener("click", toggleDiskMove);
  disk5.addEventListener("click", toggleDiskMove);
  disk6.addEventListener("click", toggleDiskMove);
  disk7.addEventListener("click", toggleDiskMove);
  disk8.addEventListener("click", toggleDiskMove);
}

function toggleDiskMove(event) {
  const disk = event.target;
  const isUp = disk.getAttribute("data-is-up") === "true";

  if (isUp) {
    moveDiskDown(disk);
  } else {
    moveDiskUp(disk);
  }

  disk.setAttribute("data-is-up", !isUp);
}

function moveDiskUp(disk) {
  console.log("Clicked Disk:", disk);
  disk.style.animation = "moveUp 0.5s forwards";
}

function moveDiskDown(disk) {
  console.log("Moving Disk Down:", disk);
  disk.style.animation = "moveDown 0.5s forwards";
}

function initStacks() {
  stack1 = new Stack();
  stack2 = new Stack();
  stack3 = new Stack();

  stack1.push(disk8);
  stack1.push(disk7);
  stack1.push(disk6);
  stack1.push(disk5);
  stack1.push(disk4);
  stack1.push(disk3);
  stack1.push(disk2);
  stack1.push(disk1);

  console.log(stack1);
}
