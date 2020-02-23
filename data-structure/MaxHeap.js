// root of the tree must be larger
// parent must be larger than children
class MaxHeap {
	constructor(){
		this.values = [];
	}
    
	insert(currentElement){
		this.values.push(currentElement);
		this.bubbleUp();
	}

	// if currentElement is larger than parent, swap currentElement with parent
	bubbleUp(){
		let index = this.values.length - 1;
		const currentElement = this.values[index]; 
		while(index > 0){
			let parentIndex = Math.floor((index - 1) / 2);
			let parent = this.values[parentIndex];
			if(currentElement <= parent){
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
			if(leftChild){
				if(rightChild && rightChild > currentElement && rightChild > leftChild){
					this.values[rightChildIndex] = currentElement;
					this.values[index] = rightChild;
					index = rightChildIndex;
				} else if(leftChild > currentElement){
					this.values[leftChildIndex] = currentElement;
					this.values[index] = leftChild;
					index = leftChildIndex;
				} else { return; }
		
			} else { return; }
		}
	}
}

let h = new MaxHeap();
h.insert(25);
h.insert(20);
h.insert(15);
h.insert(10);
h.insert(17);
console.log(h.values);
h.remove();
console.log(h.values);