export class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export class Stack {
  constructor() {
    this.head = null;
    this.lenght = 0;
  }

  push(data) {
    const node = new Node(data);
    node.next = this.head;
    this.head = node;
    this.lenght++;
  }

  pop() {
    if (!this.head) {
      return null;
    }

    const data = this.head.data;
    this.head = this.head.next;
    this.lenght--;
    return data;
  }

  peek() {
    return this.head ? this.head.data : null;
  }

  size() {
    return this.lenght;
  }

  get(index) {
    let current = this.head;
    let i = 0;

    while (current) {
      if (i === index) {
        return current.data;
      }

      current = current.next;
      i++;
    }

    return null;
  }
}
