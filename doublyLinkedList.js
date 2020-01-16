class Node {
    constructor(val) {
        this.val = val
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.tail = null;
        this.head = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val)
        if (this.length === 0){ 
            this.head = newNode
            this.tail = newNode
        } else {
        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode
        }
        this.length++
        return this
    }

    pop(){
       if(this.length === 0){
           return undefined
       }
       let oldTail = this.tail 
       if(this.length === 1){
           this.tail = null
           this.head = null
           this.length--
           return oldTail
       }
       
       this.tail = this.tail.prev
       this.tail.prev.next = null
       this.length--
       return oldTail
    }

    shift(){
        if(this.length === 0){
            return undefined
        }
        let oldHead = this.head
        if(this.length === 1){
            this.tail = null
            this.head = null
            this.length --
            return oldHead
        }
        
        this.head = oldHead.next
        this.head.prev = null
        oldHead.next = null
        this.length--
        return oldHead
    }
    unshift(val){
        let newNode = new Node(val)
        if(this.length === 0){
            this.head = newNode
            this.tail = newNode
        } else {
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }
}


    