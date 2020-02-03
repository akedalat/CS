class Node {
	constructor(val){
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor(){
		this.root = null;
	}

	insert(val){
    
		let newNode = new Node(val);
		if(!this.root){
			this.root = newNode;
			return this;
		} else {
			let currentNode = this.root;
			while(true){
				if (val === currentNode.val){return undefined;}
				if (newNode.val > currentNode.val){
					if(!currentNode.right){
						currentNode.right = newNode;
						return this;
					} else { currentNode = currentNode.right; }
 
				} else {
					if(!currentNode.left){
						currentNode.left = newNode;
						return this;
					} else { currentNode = currentNode.left; }
 
				}
			}
		}
	}
    
	find(val){
		if(!this.root){
			return false;
		}
		let currentNode = this.root;
		while(true){
			if (val === currentNode.val) {return currentNode;}
			if (val > currentNode.val){
				if(!currentNode.right){
					return false;
				} else {
					currentNode = currentNode.right;
				}
			} else {
				if (!currentNode.left){
					return false;
				} else {
					currentNode = currentNode.left;
				}
			}
		}
	} 
    
	breadthFirstSearch(){
        
	}
}