
//which takes a number and returns an array containing 
// that many numbers from the Fibonacci sequence.
// an example input of 8, this function should 
// return the array [0, 1, 1, 2, 3, 5, 8, 13].

const fibs = (inputNumber) =>  {
    let fibseq = [0,1];
for (let i = 2; i< inputNumber; i++) {
fibseq.push(fibseq[i-1] + fibseq [i-2])
}
return fibseq;
}

console.log(fibs(8));


//solves the same problem but recursively
const fibsRec = (inputN) => {
if ( inputN <= 0 ) {
    return [0];
} if (inputN === 1) {
return [0,1]
} 
let fibSeq = fibsRec(inputN-1);
let nextN = fibSeq[inputN-1] + fibSeq [inputN -2]
fibSeq.push(nextN)
    return fibSeq;

}
console.log(fibsRec(8));