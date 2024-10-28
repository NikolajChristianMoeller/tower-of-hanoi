export class DiskNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export class TowerStack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  addDisk(data) {
    const newNode = new DiskNode(data);
    newNode.next = this.top;
    this.top = newNode;
    this.length++;
  }

  removeDisk() {
    if (!this.top) return null;
    const data = this.top.data;
    this.top = this.top.next;
    this.length--;
    return data;
  }

  peekTop() {
    return this.top ? this.top.data : null;
  }

  size() {
    return this.length;
  }
}
