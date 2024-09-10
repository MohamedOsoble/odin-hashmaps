import LinkedList from "./linked-list";

class HashMap {

    constructor(){
        this.capacity = 16;
        this.loadFactor = 0.75
        this.buckets = this.initializeBuckets()
    };

    initializeBuckets(){
        return Array.from({ length: this.capacity }, () => new LinkedList());
    }

    needsResize(){
        // pass
    };

    resize(){
        // pass
    };

    hash(key){
        let hashCode = 0;

        const primeNumber = 31;
        for(let i = 0; i < key.length; i++){
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        };
        return hashCode
    };

    set(key, value){
        const index = hash(key);
        const bucket = this.buckets[index];
        let node = bucket.head;

        // Loop over all nodes while it's not empty, if an identical key is found, update the value
        while(node) {
            if(node.value.KEY === key){
                node.value.VALUE = value;
                return;
            };
            node = node.next;
        }

        // if not found, update the final node and add the K,V pair
        bucket.append({KEY: key, VALUE: value });

        // add functionality to resize buckets later
    };

    get(key){
        //pass
    };

    has(key){
        //pass
    };

    remove(key){
        //pass
    };

    length(){
        //pass
    };

    clear(){
        //pass
    };

    keys(){
        //pass
    };

    values(){
        //pass
    };

    entries(){
        //pass
    };
};
