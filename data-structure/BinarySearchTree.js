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
			let t = true;
			while(t){
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
		let t = true;
		while(t){
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
    
	// Search tree horizontality line by line
	breadthFirstSearch(){
		let queue = [];
		let visited = [];
		let currentNode;
		queue.push(this.root);
		while(queue.length > 0){
			currentNode = queue.shift();
			visited.push(currentNode.val);
			if(currentNode.left){queue.push(currentNode.left);}
			if(currentNode.right){queue.push(currentNode.right);}
		}
		return visited;
	}
    
	// Pre-order Depth First Search
	// It looks for all left and then all right side of the root
	DFSPreOrder(){
		let visited = [];
		let currentNode = this.root;
		function traverse(node){
			visited.push(node.val);
			if(node.left){traverse(node.left);}
			if(node.right){traverse(node.right);}
		}
		traverse(currentNode);
		return visited;
	}
    
	// Post-order Depth First Search
	// add children then parents
	DFSPostOrder(){
		let visited = [];
		let currentNode = this.root;
		function traverse(node){
			if(node.left){traverse(node.left);}
			if(node.right){traverse(node.right);}
			visited.push(node.val);
		}
		traverse(currentNode);
		return visited;
	}
    
	// in-order Depth First Search
	// traverse the left, visit the node then traverse the right
	DFSInOrder(){
		let visited = [];
		let currentNode = this.root;
		function traverse(node){
			if(node.left){traverse(node.left);}
			visited.push(node.val);
			if(node.right){traverse(node.right);}
		}
		traverse(currentNode);
		return visited;
	}
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(6);
tree.insert(11);
console.log(tree.DFSInOrder());
console.log(tree.DFSInOrder().length);
