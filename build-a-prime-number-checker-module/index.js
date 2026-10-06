function isPrime(int){
     if (int < 2) {
        return false;
    }
    for(var i=2; i<int; i++){
        if(int%i === 0){
            return false;
        }
    }
    return true;
}

module.exports = {
    isPrime
}