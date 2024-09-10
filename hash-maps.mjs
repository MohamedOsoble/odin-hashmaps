import LinkedList from "./linked-list.mjs";

export default class HashMap {

    constructor(){
        this.capacity = 16;
        this.size = 0;
        this.loadFactor = 0.75
        this.buckets = this.initializeBuckets()
    };

    initializeBuckets(){
        return Array.from({ length: this.capacity }, () => new LinkedList());
    }

    needsResize(){
        return this.size > this.capacity * this.loadFactor;
    };

    resize(){
        const oldBuckets = this.buckets;
        this.capacity = this.capacity * 2;
        this.buckets = this.initializeBuckets();
        for(const bucket of oldBuckets){
            let node = bucket.head;
            while(node){
                this.set(node.key, node.value)
                node = node.next;
            }
        }
    };

    hash(key){
        let hashCode = 0;

        const primeNumber = 31;
        for(let i = 0; i < key.length; i++){
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        };
        return hashCode
    };

    getBucket(key){
        return this.buckets[this.hash(key)]
    }

    set(key, value){
        const index = this.hash(key);
        const bucket = this.buckets[index];
        let node = bucket.head;

        // Loop over all nodes while it's not empty, if an identical key is found, update the value
        while(node) {
            if(node.key === key){
                node.key = key
                node.value = value;
                return;
            };
            node = node.next;
        }

        // if not found, update the final node and add the K,V pair
        bucket.append(key, value);
        this.size++;

        // add functionality to resize buckets later
        if(this.needsResize()){
            this.resize()
        }
    };

    get(key){

        // get bucket location
        const bucket = this.getBucket(key)
        return bucket.at(bucket.findKey(key))
    };

    has(key){
        const bucket = getBucket(key);
        return bucket.findKey(key);

    };

    remove(key){
        let bucket = this.getBucket(key);
        if(bucket){
            let searchValue = this.get(key).value;
            bucket.pop(searchValue);
            this.size--
            return true;
        }
        else{
            return false;
        }


    };

    length(){
        return this.size
    };

    clear(){
        let oldBuckets = this.buckets;
        this.capacity = 16;
        this.size = 0;
        this.buckets = this.initializeBuckets
        return true;
    };

    keys(){
        if(this.length < 1){
            return [];
        }
        else{
            let keys = [];
            for(let i = 0; i < this.capacity -1; i++){
                let bucket = this.buckets[i]
                let key = bucket.iterateNodes("keys");
                if(key.length > 0){
                    keys.push(key);
                }
            }
            return keys;
        }

    };

    values(){
        if(this.length < 1){
            return [];
        }
        else{
            let values = [];
            for(let i = 0; i < this.capacity -1; i++){
                let bucket = this.buckets[i]
                let value = bucket.iterateNodes("values");
                if(value.length > 0){
                    values.push(value);
                }
            }
            return values;
        }
    };

    entries(){
        if(this.size < 1){
            return [];
        }
        else{
            let entries = [];

            for(let i = 0; i < this.capacity -1; i++){
                let bucket = this.buckets[i]
                let entry = bucket.iterateNodes("entries")
                if(entry.length > 0){
                    entries.push(entry)
                }
            }
            return entries;
        }
    };
};
