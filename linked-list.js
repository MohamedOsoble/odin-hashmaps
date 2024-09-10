export default class LinkedList{

    constructor(){
        this.head = null
        this.tail = null
        this.length = null
    }


    append(value){
        const NODE = new Node()
        NODE.value = value;
        if(this.head == null){
            this.head = NODE;
            this.tail = NODE;
            this.length++
        }
        else{
            let pTail = this.tail;
            pTail.next = NODE
            this.tail = NODE
            this.length++
        }
    };

    prepend(value){
        const NODE = new Node();
        NODE.value = value;
        if(this.tail == null){
            this.head = NODE;
            this.tail = NODE;
            this.length++
        }
        else{
            let pHead = this.head
            NODE.next = pHead;
            this.head = NODE;
            this.length++
        };
    };

    at(index){
        if(index >= this.length){
            return "Index is out of bounds";
        }
        let currentNode = this.head
        for(let i = 0; i < index; i++){
            currentNode = currentNode.next;
        };
        return currentNode.value
    };


    pop(value){
        let currentNode = this.head;
        let currentTail = this.tail
        for(let i = 0; i < this.length; i++){
            if(currentNode.next == value){
                this.tail = currentNode
                this.length--
                return "popped"
            }
            else{
                currentNode = currentNode.next;
            };
        };

    };

    contains(value){
        let currentNode = this.head;
        for(let i = 0; i < this.length; i++){
            if(currentNode.value == value){
                return true;
            }
            else{
                currentNode = currentNode.next;
            };
        };
        return false
    };

    find(value){
        let index = null
        let currentNode = this.head;
        for(let i = 0; i < this.length; i++){
            if(currentNode.value == value){
                return i;
            }
            else{
                currentNode = currentNode.next
            }
        }
        return index
    }

    toString(){
        let returnString = "( " + this.head.value + " ) -> "
        let currentNode = this.head.next
        for(let i = 0; i < this.length - 1; i++){
            returnString = returnString.concat("( ", currentNode.value)
            returnString = returnString.concat(" ) -> ")
            currentNode = currentNode.next;
        }
        return returnString + "null"
    };

};

class Node{
    constructor(){
        this.value = null
        this.next = null
    }

};
