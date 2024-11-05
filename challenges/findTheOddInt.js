function findOddOccurrence(A) {
    let result = 0;
    for (let num of A) {
        result ^= num;  
    }
    return result;
}
