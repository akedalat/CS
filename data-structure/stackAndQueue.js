class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.last = null;
		this.first = null;
		this.size = 0;
	}
	// last in
	push(val) {
		const newNode = new Node(val);
		if (this.size === 0) {
			this.first = newNode;
			this.last = newNode;
		} else {
			const oldFirst = this.first;
			this.first = newNode;
			this.first.next = oldFirst;
		}
		return ++this.size;
	}
	// first out
	// if we remove from the end then it's not constant time
	// because we have iterate through the list
	pop() {
		if (this.size === 0) {
			return null;
		}
		if (this.size === 1) {
			this.last = null;
		}
		const oldFirst = this.first;
		this.first = this.first.next;
		this.size--;
		return oldFirst;
	}
}

class Queue {
	constructor() {
		this.last = null;
		this.first = null;
		this.size = 0;
	}
	// first in
	enqueue(val) {
		const newNode = new Node(val);
		if (this.size === 0) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}
		return ++this.size;
	}
	// first out
	dequeue() {
		if (this.size === 0) {
			return null;
		}
		if (this.size === 1) {
			this.last = null;
		}
		const oldFirst = this.first;
		this.first = this.first.next;
		this.size--;
		return oldFirst;
	}
}
