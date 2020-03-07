// similar to max/min Heap tree
// parent adjusted according to priority level to its children
class MaxPriorityQueue {
	constructor(){
		this.values = [];
	}
    
	insert(val, priority){
		let newNode = new Node(val, priority);
		this.values.push(newNode);
		this.bubbleUp();
	}

	// if currentElement is larger than parent, swap currentElement with parent
	bubbleUp(){
		let index = this.values.length - 1;
		const currentElement = this.values[index]; 
		while(index > 0){
			let parentIndex = Math.floor((index - 1) / 2);
			let parent = this.values[parentIndex];
			if(currentElement.priority <= parent.priority){
				break; 
			} else {
				this.values[index] = parent;
				this.values[parentIndex] = currentElement;
				index = parentIndex;
			}
		}
	}
    
	// remove the root and update the tree
	remove(){
		let oldRoot;
		if(this.values.length === 0){return;}
		if(this.values.length === 1){
			oldRoot = this.values.pop();
			return oldRoot; 
		}
		oldRoot = this.values[0];
		this.values[0] = this.values.pop();
		this.sinkDown();
		return oldRoot;
	}
    
	// Swap currentElement with the largest child
	sinkDown(){
		let index = 0;
		let currentElement = this.values[0];
		const t = true;
		while(t){
			let leftChildIndex = 2 * index + 1;
			let rightChildIndex = 2 * index + 2;
			let leftChild;
			let rightChild;
			if(leftChildIndex < this.values.length){
				leftChild = this.values[leftChildIndex];
			}
			if(rightChildIndex < this.values.length){
				rightChild = this.values[rightChildIndex];
			}
			// In Heap trees if there is no left child then there is definitely no right child
			if(leftChild){
				if(rightChild && rightChild.priority > currentElement.priority && rightChild.priority > leftChild.priority){
					this.values[rightChildIndex] = currentElement;
					this.values[index] = rightChild;
					index = rightChildIndex;
				} else if(leftChild.priority > currentElement.priority){
					this.values[leftChildIndex] = currentElement;
					this.values[index] = leftChild;
					index = leftChildIndex;
				} else { return; }
		
			} else { return; }
		}
	}
}

class Node{
	constructor(val, priority){
		this.val = val;
		this.priority = priority;
	}
}

let p = new MaxPriorityQueue();
p.insert("a",1);
p.insert("b",5);
p.insert("c",2);
p.insert("d",10);
p.insert("e",17);
console.log(p.values);