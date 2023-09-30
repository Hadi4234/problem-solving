class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }
  add(data) {
    const node = new Node(data);
    if (this.head === null ){
      this.head = node;
    } else{
      this.tail.next = node;
    }
    this.tail = node;
  }
  printAll(){
    let current = this.head;
    while (current !== null ){
      console.log(current.data);
      current = current.next;
    }
  }
}
let linkedlist = new LinkedList();

linkedlist.add('1')
linkedlist.add('3')
linkedlist.add('4')
linkedlist.add('5')

linkedlist.printAll()


