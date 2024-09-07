class HashMap {
    hash(key){
        let hashCode = 0;

        const primeNumber = 31;
        for(let i = 0; i < key.length; i++){
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        };
        return hashCode
    };

    set(key, value){
        //pass
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
}
