
class Node {
	constructor (val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor () {
		this.tail = null;
		this.head = null;
		this.length = 0;
	}

	push (val) {
		const newNode = new Node(val);
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	pop () {
		if (this.length === 0) {
			return undefined;
		}
		const oldTail = this.tail;
		if (this.length === 1) {
			this.tail = null;
			this.head = null;
			this.length--;
			return oldTail;
		}

		this.tail = this.tail.prev;
		this.tail.prev.next = null;
		this.length--;
		return oldTail;
	}

	shift () {
		if (this.length === 0) {
			return undefined;
		}
		const oldHead = this.head;
		if (this.length === 1) {
			this.tail = null;
			this.head = null;
			this.length--;
			return oldHead;
		}

		this.head = oldHead.next;
		this.head.prev = null;
		oldHead.next = null;
		this.length--;
		return oldHead;
	}

	unshift (val) {
		const newNode = new Node(val);
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.head.prev = newNode;
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}

	get (index) {
		if (index >= this.length || index < 0) {
			return null;
		}
		let counter;
		let currentNode;
		if (counter < Math.floor(this.length / 2)) {
			currentNode = this.head;
			counter = 0;
			while (counter <= index) {
				if (counter === index) {
					return currentNode;
				} else {
					currentNode = currentNode.next;
				}
				counter++;
			}
		} else {
			currentNode = this.tail;
			counter = this.length - 1;
			while (counter >= index) {
				if (counter === index) {
					return currentNode;
				} else {
					currentNode = currentNode.prev;
				}
				counter--;
			}
		}
	}

	// replaces value
	set (index, val) {
		if (index >= this.length || index < 0) {
			return false;
		}
		const currentNode = this.get(index);
		currentNode.val = val;
		return true;
	}

	insert (index, val) {
		if (index >= this.length || index < 0) {
			return false;
		}
		if (index === 0) {
			this.unshift(val);
			this.length++;
			return true;
		}
		if (index === this.length - 1) {
			this.push(val);
			this.length++;
			return true;
		}
		const newNode = new Node(val);
		const currentNode = this.get(index);
		currentNode.prev.next = newNode;
		newNode.next = currentNode;
		newNode.prev = currentNode.prev;
		currentNode.prev = newNode;
		this.length++;
		return true;
	}

	remove (index) {
		if (index >= this.length || index < 0) {
			return undefined;
		}
		if (index === 0) { this.shift(); }
		if (index === this.length - 1) { this.pop(); }
		const targetNode = this.get(index);
		targetNode.prev.next = targetNode.next;
		targetNode.next.prev = targetNode.prev;
		targetNode.prev = null;
		targetNode.next = null;
		this.length--;
		return targetNode;
	}
}
