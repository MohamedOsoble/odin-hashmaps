export default class LinkedList{

    constructor(){
        this.head = null
        this.tail = null
        this.length = null
    }


    append(key, value){
        const NODE = new Node()
        NODE.value = value;
        NODE.key = key
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

    prepend(key, value){
        const NODE = new Node();
        NODE.value = value;
        NODE.key = key;
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

    findKey(key) {
        let currentNode = this.head;
        let currentIndex = 0;

        while (currentNode !== null) {
          if (currentNode.key === key) {
            return currentIndex;
          };

          currentNode = currentNode.next;
          currentIndex++;
        };

        return -1;
      };

      iterateNodes(type){
        let values = [];
        if(this.length == 0){
            return -1
        }
        if(type === "keys"){
            let currentNode = this.head;
            for(let i = 0; i < this.length; i++){
                values.push(currentNode.key);
                currentNode = currentNode.next;
            };
        }
        else if(type === "values"){
            let currentNode = this.head;
            for(let i = 0; i < this.length; i++){
                values.push(currentNode.value);
                currentNode = currentNode.next;
            };
        }
        else{
            let currentNode = this.head;
            for(let i = 0; i < this.length; i++){
                values.push({Key: currentNode.key, Value: currentNode.value});
                currentNode = currentNode.next;
            };
        }
        return values
      };

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
        this.key = null
        this.value = null
        this.next = null
    }

};
